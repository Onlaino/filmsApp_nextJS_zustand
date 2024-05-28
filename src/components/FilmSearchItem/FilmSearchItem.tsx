import Image from 'next/image'
import cl from './FilmSearchItem.module.css'
import { IFilmSeachItemProps } from './FilmSearchItem.props'

export const FilmSearchItem = ({ name, imgUrl, id }: IFilmSeachItemProps) => {
	return (
		<div className={cl.film}>
				<Image
					src={imgUrl}
					className={cl.image}
					width={45}
					height={45}
					alt='film_image'
				/>
				<div className={cl.name}>{name}</div>
		</div>
	)
}
