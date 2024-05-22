'use client'
import cl from './FavoritesFilms.module.css'
import { Heading } from '@/components/ui/Heading/Heading'
import { usePersonStore } from '@/store'
import { FilmListItem } from '@/components/FilmItem/FilmItem'

export default function FavoritesPage() {
	const favoriteFilms = usePersonStore((state) => state.userFilms)

	return (
		<section>
			<Heading>Избранное</Heading>
			<div className={cl.filmList}>
				{favoriteFilms.map((fl) => (
					<FilmListItem
						key={fl.id}
						id={fl.id}
						imgId={fl.imgId}
						rating={fl.rating}
						title={fl.title}
					/>
				))}
			</div>
		</section>
	)
}
