'use client'
import { usePersonStore } from '@/store'
import cl from './Navigation.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
	const pathname = usePathname()
	const filmLength = usePersonStore((state) => state.userFilms).length

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
						<div className={`${cl.favorite}`}>{filmLength}</div>
					</Link>
					<Link href={'/login'} className={cl.headerRightItem}>Войти</Link>
				</div>
			</nav>
		</header>
	)
}
