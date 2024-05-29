import cl from './MainBody.module.css'
import { FC } from 'react'
import { Heading } from '../ui/Heading/Heading'
import { FilmList } from '../FilmList/FilmList'
import { Paragraph } from '../ui/Paragraph/Paragraph'
import { FilmService } from '@/services/film.service'
import { IMainBodyProps } from './MainBody.props'

const filmService = new FilmService()


export const MainBody: FC<IMainBodyProps> = async () => {
	const films = await filmService.getAllFilms()

	return (
		<div className={cl.body}>
			<div className={cl.bodyHeader}>
				<Heading clazz={cl.bodyHeader}>Фильмы</Heading>
			</div>
			<FilmList films={films} />
		</div>
	)
}
