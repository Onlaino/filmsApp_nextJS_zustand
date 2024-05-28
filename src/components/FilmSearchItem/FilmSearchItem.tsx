import Image from 'next/image'
import cl from './FilmSearchItem.module.css'
import { IFilmSeachItemProps } from './FilmSearchItem.props'
import { motion } from 'framer-motion'

export const FilmSearchItem = ({ name, imgUrl }: IFilmSeachItemProps) => {
	return (
		<motion.div
			className={cl.film}
			initial={{ y: 500 }}
			animate={{ y: 0 }}
			exit={{ y: -200 }}
			transition={{
				ease: 'circIn',
				duration: 0.35,
			}}
		>
			<Image
				src={imgUrl}
				className={cl.image}
				width={45}
				height={45}
				alt='film_image'
			/>
			<div className={cl.name}>{name}</div>
		</motion.div>
	)
}
