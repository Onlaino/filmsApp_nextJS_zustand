import cl from './FilmItem.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { Paragraph } from '../ui/Paragraph/Paragraph'
import { InSelect } from '../ui/InSelect/InSelect'
import { FilmItemProps } from './filmItem.props'
import { usePersonStore } from '@/store'
import { motion } from 'framer-motion'

export const FilmListItem: FC<FilmItemProps> = ({
	imgId,
	title,
	rating,
	id,
	propIsAdded,
}) => {
	const addFilm = usePersonStore((state) => state.addFilm)
	const [isAdded, setIsAdded] = useState<boolean>(false)

	const handleIsAdded = () => {
		addFilm({ imgId, title, rating, id, isAdded: true })
		setIsAdded(!isAdded)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.35 }}
			className={cl.filmListItems}
		>
			<div className={cl.filmListItem}>
				<Link className={cl.link} href={`/${id}`}>
					<Image
						src={imgId}
						alt='image'
						width={266}
						height={400}
						layout='responsive'
						// sizes='(min-width: 430px) 80px, 100px'
						className={cl.filmImage}
					/>
				</Link>
				<Paragraph clazz={cl.filmItemParagraphTitle}>{title}</Paragraph>
				<InSelect
					isAdded={propIsAdded ? propIsAdded : isAdded}
					onClick={handleIsAdded}
				/>
			</div>
		</motion.div>
	)
}
