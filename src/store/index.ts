import { create } from 'zustand'
import { UserActions, UserState } from './store.types'
import { createJSONStorage, persist } from 'zustand/middleware'

export const usePersonStore = create(
	persist<UserState & UserActions>(
		(set) => ({
			userName: '',
			isLogined: false,
			jwt: '',
			userFilms: [],

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
		}),
		{
			name: 'person-store',
			storage: createJSONStorage(() => localStorage),
		}
	)
)
