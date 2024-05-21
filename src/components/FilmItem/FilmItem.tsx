import Link from 'next/link'
import { RatingBlock } from '../ui/RatingBlock/RatingBlock'
import cl from './FilmItem.module.css'
import { FC } from 'react'
import Image from 'next/image'
import { Paragraph } from '../ui/Paragraph/Paragraph'
import { InSelect } from '../ui/InSelect/InSelect'
import { FilmItemProps } from './filmItem.props'

export const FilmListItem: FC<FilmItemProps> = ({
	imgId,
	title,
	rating,
	id,
}) => {
	return (
		<div className={cl.filmListItems}>
			<div className={cl.filmListItem}>
				<RatingBlock rating={rating} />
				<Link href={`/${id}`}>
					<Image
						src={imgId}
						alt={title}
						width={266}
						height={400}
						className={cl.filmImage}
					/>
				</Link>
				<Paragraph clazz={cl.filmItemParagraphTitle}>{title}</Paragraph>
				<InSelect />
			</div>
		</div>
	)
}
