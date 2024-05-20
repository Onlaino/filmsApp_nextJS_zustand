import cl from './FilmList.module.css';
import { Heading } from '../ui/Heading/Heading';
import { Paragraph } from '../ui/Paragraph/Paragraph';

export const FilmList = () => {
	return (
		<>
				<div className={cl.oops}>
					<Heading clazz={cl.heading}>
						Упс... Ничего не найдено
						<Paragraph clazz={cl.paragraph}>
							Попробуйте изменить запрос или ввести более точное <br /> название
							фильма
						</Paragraph>
					</Heading>
				</div>
		</>
	);
};
