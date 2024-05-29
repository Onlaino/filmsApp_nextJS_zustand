'use client'
import cl from './Navigation.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import PersonIcon from '@mui/icons-material/Person'
import CloseIcon from '@mui/icons-material/Close'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { usePersonStore } from '@/store'
import { useState } from 'react'
import { SearchFilms } from '../SearchFilms/SearchFilms'

export const Navigation = () => {
	const pathname = usePathname()
	const router = useRouter()
	const { userName, jwt, logout, userFilms } = usePersonStore(s => s)
	const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
	const [filmName, setFilmName] = useState<string>('')

	const handleLogout = () => {
		logout()
		router.push('/login')
		setIsPopupOpen(false)
	}

	return (
		<header onKeyDown={(e) => {
			if (e.key === 'Escape') setIsPopupOpen(false)
		}} className={cl.header}>
			{!isPopupOpen ? (
				<button className={cl.buttonPopup} onClick={() => setIsPopupOpen(true)}>
					<MenuOpenIcon />
				</button>
			) : (
				<button
					className={cl.buttonPopup}
					onClick={() => setIsPopupOpen(false)}
				>
					<CloseIcon />
				</button>
			)}

			{isPopupOpen && (
				<nav
					className={cn(cl.headerNav, {
						[cl.show]: isPopupOpen,
						[cl.hidden]: !isPopupOpen,
					})}
				>
					<Link href={'/'} className={cl.logo}>
						<Image
							onClick={() => setIsPopupOpen(false)}
							src={'/logo.svg'}
							alt='logotype'
							width={40}
							height={40}
						/>
					</Link>

					<div className={cl.headerRight}>
						<Link
							href='/'
							className={cn(cl.headerRightItem, {
								[cl.active]: pathname === '/',
							})}
						>
							<span onClick={() => setIsPopupOpen(false)}>Фильмы</span>
						</Link>
						{isSearchOpen ? (
							<SearchFilms
								setIsOpen={setIsSearchOpen}
								setFileName={setFilmName}
								filmName={filmName}
								isOpen={isSearchOpen}
							/>
						) : (
							<div
								onClick={() => setIsSearchOpen(true)}
								onKeyDown={evt => {
									if (evt.key === 'Enter') {
										setIsSearchOpen(true)
									}
								}}
								className={cl.headerRightItem}
								tabIndex={0}
							>
								Поиск
							</div>
						)}

						<Link
							onClick={() => setIsPopupOpen(false)}
							className={cn(cl.headerRightItem, {
								[cl.active]: pathname === '/favorites',
							})}
							href={'/favorites'}
						>
							Избранное
							<div className={`${cl.favorite}`}>{userFilms.length}</div>
						</Link>

						{userName.length > 1 && (
							<div className={`${cl.headerRightItem} ${cl.big}`}>
								<PersonIcon />
								{userName}
							</div>
						)}

						{jwt ? (
							<Link
								onClick={handleLogout}
								href={'/login'}
								className={cl.headerRightItem}
							>
								Выйти
							</Link>
						) : (
							<Link
								onClick={() => setIsPopupOpen(false)}
								href={'/login'}
								className={cn(cl.headerRightItem, {
									[cl.active]: pathname === '/login',
								})}
							>
								Войти
							</Link>
						)}
					</div>
				</nav>
			)}
		</header>
	)
}
