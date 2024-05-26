import { IFilm } from '@/types/film.interface'

export class FilmService {
	private BASE_URL: string = 'https://moviesdatabase.p.rapidapi.com/titles'
	private headers = {
		'X-RapidAPI-Key': process.env.API_KEY || '',
		'X-RapidAPI-Host': process.env.API_HOST || '',
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

	async getFilmsByName(name: string) {
		const res = await fetch(
			`${this.BASE_URL}/search/title/${name}?exact=false`,
			{ headers: this.headers }
		)
		const data = await res.json()
		const films = data.results
		return films
	}
}
