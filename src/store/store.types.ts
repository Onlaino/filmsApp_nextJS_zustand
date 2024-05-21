import { IFilm } from '@/types/film.interface'

export type UserState = {
	userName: string
	isLogined: boolean
	jwt: string
	userFilms: IFilm[]
}

export type UserActions = {
	updateUserName: (name: string) => void
	login: () => void
	logout: () => void
	addFilm: (film: IFilm) => void
	removeFilm: (id: string) => void
}
