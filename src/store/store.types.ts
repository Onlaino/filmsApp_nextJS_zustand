import { IFavoriteFilm } from '@/types/film.interface'

export type UserState = {
	userName: string
	isLogined: boolean
	jwt: string
	userFilms: IFavoriteFilm[]
}

export type UserActions = {
	updateUserName: (name: string) => void
	login: () => void
	logout: () => void
	addFilm: (film: IFavoriteFilm) => void
	removeFilm: (id: string) => void
}
