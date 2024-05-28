'use client'
import cl from './Navigation.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import PersonIcon from '@mui/icons-material/Person'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { usePersonStore } from '@/store'
import { useState } from 'react'
import { SearchFilms } from '../SearchFilms/SearchFilms'

export const Navigation = () => {
	const pathname = usePathname()
	const router = useRouter()
	const { userName, jwt, logout, userFilms } = usePersonStore(s => s)
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
	const [filmName, setFilmName] = useState<string>('')

	const handleLogout = () => {
		logout()
		router.push('/login')
	}

	return (
		<motion.header
			className={cl.header}
			initial={{ y: -300 }}
			animate={{ y: 0 }}
			exit={{ y: -200 }}
			transition={{ duration: 0.35 }}
		>
			<nav className={cl.headerNav}>
				<Link href={'/'}>
					<Image src={'/logo.svg'} alt='logotype' width={40} height={40} />
				</Link>

				<div className={cl.headerRight}>
					<Link
						href='/'
						className={cn(cl.headerRightItem, {
							[cl.active]: pathname === '/',
						})}
					>
						Фильмы
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
							className={cl.headerRightItem}
						>
							Поиск
						</div>
					)}

					<Link
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
		</motion.header>
	)
}
