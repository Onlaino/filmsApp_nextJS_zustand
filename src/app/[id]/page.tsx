import { Paragraph } from '@/components/ui/Paragraph/Paragraph'
import cl from './id.module.css'
import { Heading } from '@/components/ui/Heading/Heading'
import { FilmPageComponent } from '@/components/FilmPageComponent/FilmPageComponent'
import { FilmService } from '@/services/film.service'
import { NOT_FOUND_IMAGE_URL } from '@/helpers/notFoundImage'
import { Suspense } from 'react'
import { FilmPageSkeleton } from '@/styles/skeletons/FilmPageSkeleton/FilmPageSkeleton'

const filmService = new FilmService()

export default async function FilmPage({ params }: { params: { id: string } }) {
	const film = await filmService.getFilmsById(params.id)
	const { id, primaryImage, titleText } = film

	return (
		<section>
			<div className={cl.film}>
				<div className={cl.head}>
					<Paragraph clazz={cl.paragraph}>Поиск фильмов</Paragraph>
					<Heading clazz={cl.heading}>{titleText?.text}</Heading>
				</div>
				<Suspense fallback={<FilmPageSkeleton />}>
					<FilmPageComponent
						id={id}
						isAdded={false}
						rating='300'
						title={titleText.text}
						imgId={
							primaryImage?.url ? film?.primaryImage.url : NOT_FOUND_IMAGE_URL
						}
						// releaseYear={film?.releaseYear?.year}
					/>
				</Suspense>
			</div>
		</section>
	)
}
