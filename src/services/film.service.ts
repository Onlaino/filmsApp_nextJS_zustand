import { IFilm } from '@/types/film.interface'

export class FilmService {
	private BASE_URL: string = 'https://moviesdatabase.p.rapidapi.com/titles'
	private headers = {
		'x-rapidapi-key': process.env.API_KEY || '',
		'x-rapidapi-host': process.env.API_HOST || '',
	}

	async getAllFilms() {
		try {
			const res = await fetch(`${this.BASE_URL}/?page=2&limit=16`, {
				headers: this.headers,
			})
			if (res.ok) {
				const data = await res.json()
				const films: IFilm[] = data.results

				return films
			}
		} catch (error) {
			console.log(error)
		}
	}

	async getFilmsById(id: string) {
		try {
			const res = await fetch(`${this.BASE_URL}/${id}`, {
				headers: this.headers,
			})

			if (res.ok) {
				const data = await res.json()
				const film: IFilm = data.results
				return film
			}
		} catch (error) {
			console.log(error)
		}
	}

	async getFilmsByName(name: string): Promise<IFilm[] | undefined> {
		try {
			const res = await fetch(
				`${this.BASE_URL}/search/title/${name}?exact=false&titleType=movie`,
				{
					cache: 'no-store',
					headers: {
						'x-rapidapi-key':
							'a990caa5d1msh553b1cc7736967ap1fb16ejsnfd7c2d8ab4b6',
						'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com',
					},
				}
			)
			const data = await res.json()
			const films = data.results
			return films
		} catch (error) {
			console.log(error)
		}
	}
}
