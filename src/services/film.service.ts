export class FilmService {
	readonly API_KEY: string =
		'a990caa5d1msh553b1cc7736967ap1fb16ejsnfd7c2d8ab4b6';
	readonly API_HOST: string = 'moviesdatabase.p.rapidapi.com';
	readonly BASE_URL: string =
		'https://moviesdatabase.p.rapidapi.com/titles?page=2&limit16';

	async getAllFilms() {
		const res = await fetch(this.BASE_URL, {
			headers: {
				'X-RapidAPI-Key': this.API_KEY,
				'X-RapidAPI-Host': this.API_HOST,
			},
		});
		const data = await res.json();
		return data.results;
	}
}
