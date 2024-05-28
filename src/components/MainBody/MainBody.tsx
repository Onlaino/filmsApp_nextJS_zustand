import cl from './MainBody.module.css'
import Image from 'next/image'
import { FC } from 'react'
import { Search } from '../Search/Search'
import { Button } from '../ui/Button/Button'
import { Heading } from '../ui/Heading/Heading'
import { FilmList } from '../FilmList/FilmList'
import { Paragraph } from '../ui/Paragraph/Paragraph'
import { FilmService } from '@/services/film.service'
import { IMainBodyProps } from './MainBody.props'

const filmService = new FilmService()


export const MainBody: FC<IMainBodyProps> = async () => {
	const films = await filmService.getAllFilms()

	return (
		<div className={cl.body}>
			<div className={cl.bodyHeader}>
				<Heading>Поиск</Heading>
				<Paragraph clazz={cl.bodyParagraph}>
					Введите название фильма, сериала или мультфильма для поиска и
					добавления в избранное.
				</Paragraph>
			</div>
			{/* <div className={cl.bodyInput}>
				<Search
					required
					placeholder={'Введите название'}
				>
					<Image
						src='/search.svg'
						alt='Иконка пользователя'
						width={20}
						height={20}
					/>
				</Search>
				<Button>Искать</Button>
			</div> */}
			<FilmList films={films} />
		</div>
	)
}
