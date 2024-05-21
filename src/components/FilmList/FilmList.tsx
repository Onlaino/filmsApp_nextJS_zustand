'use client';
import cl from './FilmList.module.css';
import { Heading } from '../ui/Heading/Heading';
import { Paragraph } from '../ui/Paragraph/Paragraph';
import { FC } from 'react';
import { IFilmListProps } from './filmList.props';
import { FilmListItem } from '../FilmItem/FilmItem';
import { NOT_FOUND_IMAGE_URL } from '@/helpers/notFoundImage';


export const FilmList: FC<IFilmListProps> = ({ films }) => {
	

	return (
		<>
			{films.length ? (
				<div className={cl.filmList}>
					{films.map((fl) => (
						<FilmListItem
							id={fl.id}
							key={fl.id}
							title={fl.titleText?.text ? fl.titleText?.text : ''}
							releaseYear={fl.releaseYear}
							releaseDate={fl.releaseDate}
							imgId={
								fl.primaryImage?.url
									? fl.primaryImage?.url
									: NOT_FOUND_IMAGE_URL
							}
							rating={'300'}
						/>
					))}
				</div>
			) : (
				<div className={cl.oops}>
					<Heading clazz={cl.heading}>
						Упс... Ничего не найдено
						<Paragraph clazz={cl.paragraph}>
							Попробуйте изменить запрос или ввести более точное <br /> название
							фильма
						</Paragraph>
					</Heading>
				</div>
			)}
		</>
	);
};
