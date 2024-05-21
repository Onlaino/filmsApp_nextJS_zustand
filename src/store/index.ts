import { create } from 'zustand'
import { UserActions, UserState } from './store.types'
import { IFilm } from '@/types/film.interface'

export const userPersonStore = create<UserState & UserActions>((set) => ({
	userName: '',
	isLogined: false,
	jwt: '',
	userFilms: [],
	updateUserName: (name: string) =>
		set((state) => ({ ...state, userName: name })),
	login: () => set((state) => ({ ...state, isLogined: true })),
	logout: () => set((state) => ({ ...state, isLogined: false })),
	addFilm: (film: IFilm) =>
		set((state) => ({ ...state, userFilms: [...state.userFilms, film] })),
	removeFilm: (id: string) =>
		set((state) => ({
			...state,
			userFilms: state.userFilms.filter((fl) => fl.id !== id),
		})),
}))
