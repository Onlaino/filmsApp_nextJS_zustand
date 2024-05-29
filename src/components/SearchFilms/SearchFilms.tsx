import cl from './SearchFilms.module.css'
import cn from 'classnames'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { motion } from 'framer-motion'
import { ISearchFilmsProps } from './SearchFilms.props'
import { KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import { IFilm } from '@/types/film.interface'
import { FilmService } from '@/services/film.service'
import { FilmSearchItem } from '../FilmSearchItem/FilmSearchItem'
import { NOT_FOUND_IMAGE_URL } from '@/helpers/notFoundImage'
import { redirect, useRouter } from 'next/navigation'

const filmService = new FilmService()

export const SearchFilms = ({
	className,
	filmName,
	isOpen,
	setIsOpen,
	setFileName,
	...props
}: ISearchFilmsProps) => {
	const [films, setFilms] = useState<IFilm[] | undefined>([])
	const [isSearched, setIsSearched] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)
	const router = useRouter()

	const handlePressEnter: KeyboardEventHandler<
		HTMLInputElement
	> = async evt => {
		if (evt.key === 'Enter') {
			setIsSearched(true)
			const films = await filmService.getFilmsByName(filmName)
			setFilms(films)
		}
		setIsSearched(false)
	}

	const handleGoToFilm = (id: string) => {
		router.push(`/${id}`)
		setIsOpen(false)
		// redirect(`/${id}`)
	}

	const handleClosePopup = (event: KeyboardEvent) => {
		if (event.key === 'Escape') setIsOpen(false)
	}

	useEffect(() => {
		if (isOpen) {
			document.body.addEventListener('keydown', handleClosePopup)
			document.body.style.overflow = 'hidden'
			inputRef.current?.focus()
		}
		return () => {
			document.body.removeEventListener('keydown', handleClosePopup)
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<div
			className={cn(cl.searchWrapper, {
				[cl.hidden]: !isOpen,
				[cl.show]: isOpen,
			})}
			{...props}
		>
			<motion.div
				className={cl.find}
				initial={{ y: -500 }}
				animate={{ y: isOpen ? 0 : -500 }}
				transition={{ duration: 0.35 }}
			>
				<h2 className={cl.heading}>Поиск..</h2>
				<div className={cl.search}>
					<input
						ref={inputRef}
						onKeyDown={e => handlePressEnter(e)}
						onChange={e => setFileName(e.target.value)}
						className={cl.input}
						type='text'
						placeholder='Введите название фильма...'
					/>
					<ExitToAppIcon className={cl.icon} onClick={() => setIsOpen(false)} />
				</div>
				<div className={cl.films}>
					{isSearched ? (
						<div className={cl.loader}></div>
					) : isSearched && films && films.length === 0 ? (
						<h2 className={cl.noFilms}>Фильмы не найдены</h2>
					) : (
						films &&
						films.map(f => (
							<div
								className={cl.filmItem}
								key={f.id}
								onClick={() => handleGoToFilm(f.id)}
							>
								<FilmSearchItem
									id={f.id}
									imgUrl={
										f.primaryImage && f.primaryImage.url
											? f.primaryImage.url
											: NOT_FOUND_IMAGE_URL
									}
									name={f.titleText.text}
								/>
							</div>
						))
					)}
				</div>
			</motion.div>
		</div>
	)
}
