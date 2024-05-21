import { MainBody } from '@/components/MainBody/MainBody';
import { FilmService } from '@/services/film.service';

const filmService = new FilmService();

export default async function Home() {
  const films = await filmService.getAllFilms();

	return (
		<>
			<MainBody films={films} />
		</>
	);
}
