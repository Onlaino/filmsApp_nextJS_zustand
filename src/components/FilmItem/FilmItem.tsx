import Link from 'next/link';
import { RatingBlock } from '../ui/RatingBlock/RatingBlock';
import cl from './FilmItem.module.css';
import { FC, useState } from 'react';
import Image from 'next/image';
import { Paragraph } from '../ui/Paragraph/Paragraph';
import { InSelect } from '../ui/InSelect/InSelect';
import { FilmItemProps } from './filmItem.props';

export const FilmListItem: FC<FilmItemProps> = ({
	imgId,
	title,
	rating,
	id,
	releaseYear,
	releaseDate,
	propIsAdded,
}) => {
	return (
		<div className={cl.filmListItems}>
			<div className={cl.filmListItem}>
				<RatingBlock rating={rating} />
				<Link href={`/film/${id}`}>
					{/* <FilmImage clazz={cl.filmImage} imgId={imgId} title={title} /> */}
					<Image src={imgId} alt={title} width={266} height={400} />
				</Link>
				<Paragraph clazz={cl.filmItemParagraphTitle}>{title}</Paragraph>
				<InSelect />
			</div>
		</div>
	);
};
