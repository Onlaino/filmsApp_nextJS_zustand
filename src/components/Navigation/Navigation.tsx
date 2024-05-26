'use client'
import { usePersonStore } from '@/store'
import cl from './Navigation.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PersonIcon from '@mui/icons-material/Person'
import { useRouter } from 'next/navigation'

export const Navigation = () => {
	const pathname = usePathname()
	const router = useRouter();
	const { userName, jwt, logout, userFilms } = usePersonStore(s => s)

	const handleLogout = () => {
		logout();
		router.push('/login');
	}

	return (
		<header className={cl.header}>
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
						Поиск фильмов
					</Link>

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
		</header>
	)
}
