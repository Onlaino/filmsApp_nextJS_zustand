import { Heading } from '@/components/ui/Heading/Heading';
import cl from './FavoritesFilms.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Избранное',
	description: "Избранные фильмы"
}


export default function FavoritesPage() {
	return (
		<section>
			<Heading>Избранное</Heading>
			<div className={cl.filmList}></div>
		</section>
	);
}
