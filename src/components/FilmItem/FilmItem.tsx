import Link from 'next/link'
import { RatingBlock } from '../ui/RatingBlock/RatingBlock'
import cl from './FilmItem.module.css'
import { FC, useState } from 'react'
import Image from 'next/image'
import { Paragraph } from '../ui/Paragraph/Paragraph'
import { InSelect } from '../ui/InSelect/InSelect'
import { FilmItemProps } from './filmItem.props'
import { usePersonStore } from '@/store'

export const FilmListItem: FC<FilmItemProps> = ({
	imgId,
	title,
	rating,
	id,
	propIsAdded
}) => {
	const addFilm = usePersonStore(state => state.addFilm);
	const [isAdded, setIsAdded] = useState<boolean>(false);

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
				<InSelect
					isAdded={isAdded}
					onClick={() => addFilm({ imgId, title, rating, id, isAdded: true })}
				/>
			</div>
		</div>
	)
}
