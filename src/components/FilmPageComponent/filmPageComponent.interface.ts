import { IFavoriteFilm, ReleaseYear } from '@/types/film.interface';

export interface IFilmPageProps {
	film?: IFavoriteFilm
	isAdded?: boolean;
	imgUrl: string;
	releaseYear: number;
}