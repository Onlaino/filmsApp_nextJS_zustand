'use client'
import cl from './FilmPageComponent.module.css'
import Image from 'next/image'
import { Paragraph } from '../ui/Paragraph/Paragraph'
import { RatingBlock } from '../ui/RatingBlock/RatingBlock'
import { InSelect } from '../ui/InSelect/InSelect'
import { IFilmPageProps } from './filmPageComponent.interface'
import { usePersonStore } from '@/store'
import { usePathname } from 'next/navigation'
import { IFavoriteFilm } from '@/types/film.interface'

export const FilmPageComponent = ({id, imgId, title, rating, isAdded}: IFavoriteFilm) => {
	const { userFilms, addFilm } = usePersonStore((s) => s)
	const pathName = usePathname()
	const thisFilm = userFilms.find((f) => f.id === pathName.slice(1))

	return (
		<>
			<div className={cl.filmInfo}>
				<div className={cl.filmImage}>
					<Image
						src={imgId}
						alt={imgId}
						width={480}
						height={720}
						className={cl.filmImage}
					/>
				</div>
				<div className={cl.filmInfoText}>
					<div className={cl.filmText}>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Consectetur suscipit numquam ducimus pariatur facere. Dolorem
							libero molestias earum laudantium error! Consectetur architecto
							autem aliquid aspernatur eveniet, ex aut adipisci explicabo. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Sed facilis
							corporis quae, consequatur quidem id sequi officia nam voluptatem
							esse assumenda ipsa dolor aliquid et, molestiae ratione
							perspiciatis neque nisi.
						</Paragraph>
						<div className={cl.rating}>
							<RatingBlock clazz={cl.ratingBlock} rating='300' />
							<InSelect
								isAdded={thisFilm?.isAdded}
								onClick={() => {
									const newIsAddedStatus = !thisFilm?.isAdded
									addFilm({
										id,
										imgId,
										title,
										rating,
										isAdded: newIsAddedStatus,
									})
								}}
							/>
						</div>
						<Paragraph clazz={cl.p}>
							Тип: <span>Movie</span>
						</Paragraph>
						<Paragraph clazz={cl.p}>
							Дата выхода: <span className='span'>1999</span>
							{/* {filmById?.releaseYear?.year} */}
						</Paragraph>
						<Paragraph clazz={cl.p}>
							Длительность: <span>180 минут</span>
						</Paragraph>
					</div>
				</div>
			</div>
			<div className={cl.feedBack}></div>
			<Paragraph style={{ marginLeft: 10, marginBottom: 15 }}>Отзывы</Paragraph>
			<div className={cl.head}>
				<div className={cl.feedBackText}>
					<div className={cl.feedBackTitle}>Not as good as infinity war..</div>
					<Paragraph>
						But its a pretty good film. A bit of a mess in some parts, lacking
						the cohesive and effortless feel infinity war somehow managed to
						accomplish. Some silly plot holes and characters that could&apos;ve
						been cut (Ahem, captain marvel and thanos). The use of Captain
						marvel in this film was just ridiculous. Shes there at the start,
						bails for some reason? And then pops up at the end to serve no
						purpose but deux ex machina a space ship...
					</Paragraph>
				</div>
			</div>
		</>
	)
}
