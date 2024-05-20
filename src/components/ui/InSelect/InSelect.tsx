import cl from './InSelect.module.css';
import cn from 'classnames';
import { Paragraph } from '../Paragraph/Paragraph';
import { IInSelectProps } from './inSelect.props';
import Image from 'next/image';

export const InSelect = ({ onClick, isAdded, ...props }: IInSelectProps) => {
	return (
		<div
			{...props}
			className={cn(cl.select, {
				[cl.added]: isAdded,
			})}
			onClick={onClick}
		>
			{isAdded ? (
				<Image src='/inFavorites.svg' alt='inFavorites' />
			) : (
				<Image src='/like.svg' alt='like' />
			)}
			<Paragraph
				clazz={cn(cl.selectParargaph, {
					[cl.added]: isAdded,
				})}
			>
				{isAdded ? 'В избранном' : 'В избранное'}
			</Paragraph>
		</div>
	);
};
