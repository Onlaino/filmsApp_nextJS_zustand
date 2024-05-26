import { IFilm } from '@/types/film.interface';

export interface FilmItemProps {
	id: string;
	imgId: string;
	title: string;
	rating: string;
	propIsAdded?: boolean;
	onRemove?: (id: string) => IFilm[];
	releaseDate?: object;
	releaseYear?: {
		endYear: null | number;
		year: number;
		__typename: string;
	};
}