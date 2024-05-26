'use client'

import cl from './InSelect.module.css'
import cn from 'classnames'
import Image from 'next/image'
import { Paragraph } from '../Paragraph/Paragraph'
import { IInSelectProps } from './inSelect.props'

//{ onClick, isAdded, ...props }: IInSelectProps
// export const InSelect = ({ addFilm }: { addFilm: () => void }) => {
// 	return (
// 		<div className={cl.select} onClick={addFilm}>
// 			<Image width={32} height={32} src='/like.svg' alt='inFavorites' />
// 			<Paragraph clazz={cl.selectParagraph}>В избранное</Paragraph>
// 		</div>
// 	)
// }

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
				<Image
					width={20}
					height={20}
					src='/inFavorites.svg'
					alt='inFavorites'
				/>
			) : (
				<Image width={20} height={20} src='/like.svg' alt='like' />
			)}
			<Paragraph
				clazz={cn(cl.selectParargaph, {
					[cl.added]: isAdded,
				})}
			>
				{isAdded ? 'В избранном' : 'В избранное'}
			</Paragraph>
		</div>
	)
}
