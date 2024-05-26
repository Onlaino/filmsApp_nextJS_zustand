import { create } from 'zustand'
import { UserActions, UserState } from './store.types'

export const usePersonStore = create<UserState & UserActions>((set) => ({
	userName: '',
	isLogined: false,
	jwt: '',
	userFilms: [],
	// updateUserName: (name: string) =>
	// set((state) => ({ ...state, userName: name })),

	login: (name: string) =>
		set((state) => ({
			...state,
			jwt: 'auth',
			userName: name,
			isLogined: true,
		})),

	logout: () =>
		set(() => ({
			jwt: '',
			userName: '',
			userFilms: [],
			isLogined: false,
		})),
		// removerFilm теперь реализован в addFilm
	addFilm: (film) =>
		set((state) =>
			state.userFilms.find((f) => f.id === film.id)
				? {
						...state,
						userFilms: state.userFilms.filter((fl) => fl.id !== film.id),
				  }
				: { ...state, userFilms: [...state.userFilms, film] }
		),
	// set((state) => ({ ...state, userFilms: [...state.userFilms, film] })),

	removeFilm: (id: string) =>
		set((state) => ({
			...state,
			userFilms: state.userFilms.filter((fl) => fl.id !== id),
		})),
}))
