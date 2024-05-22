import { IFilm } from '@/types/film.interface'

export class FilmService {
	private API_KEY: string = 'a990caa5d1msh553b1cc7736967ap1fb16ejsnfd7c2d8ab4b6'
	private API_HOST: string = 'moviesdatabase.p.rapidapi.com'
	private BASE_URL: string = 'https://moviesdatabase.p.rapidapi.com/titles'
	private headers = {
		'X-RapidAPI-Key': this.API_KEY,
		'X-RapidAPI-Host': this.API_HOST,
	}

	async getAllFilms() {
		const res = await fetch(`${this.BASE_URL}/?page=2&limit=16`, {
			headers: this.headers,
		})

		const data = await res.json()
		const films: IFilm[] = data.results
		return films
	}

	async getFilmsById(id: string) {
		const res = await fetch(`${this.BASE_URL}/${id}`, {
			headers: this.headers,
		})
		const data = await res.json()
		const film: IFilm = data.results
		return film
	}
}