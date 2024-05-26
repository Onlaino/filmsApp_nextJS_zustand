'use client'
import cl from './FavoritesFilms.module.css'
import { Heading } from '@/components/ui/Heading/Heading'
import { usePersonStore } from '@/store'
import { FilmListItem } from '@/components/FilmItem/FilmItem'
import { RequireAuth } from '@/helpers/RequireAuth/RequireAuth'
import { AnimatePresence } from 'framer-motion'

export default function FavoritesPage() {
	const favoriteFilms = usePersonStore((state) => state.userFilms)
	const jwt = usePersonStore(s => s.jwt);

	return (
		<RequireAuth>
			<section>
				<Heading>Избранное</Heading>
				<div className={cl.filmList}>
					{favoriteFilms.map((fl) => (
						<AnimatePresence key={fl.id}>
							<FilmListItem
								key={fl.id}
								id={fl.id}
								imgId={fl.imgId}
								rating={fl.rating}
								title={fl.title}
								propIsAdded={fl.isAdded}
							/>
						</AnimatePresence>
					))}
				</div>
			</section>
		</RequireAuth>
	)
}
