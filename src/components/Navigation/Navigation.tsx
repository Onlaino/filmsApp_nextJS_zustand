'use client';
import cl from './Navigation.module.css';
import cn from 'classnames'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
	const pathname = usePathname();

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

					{/* <div className={cl.headerRightItem}> */}
					<Link
						className={cn(cl.headerRightItem, {
							[cl.active]: pathname === '/favorites',
						})}
						href={'/favorites'}
					>
						Избранное
					</Link>
					{/* </div> */}
				</div>
			</nav>
		</header>
	);
}