import cl from './InSelected.module.css'
import { Paragraph } from '../Paragraph/Paragraph'
import Image from 'next/image'

export const InSelected = () => {
	return (
		<div className={cl.select}>
			<Image src='/inFavorites.svg' alt='inFavorites' width={32} height={32}/>
			<Paragraph>В избранном</Paragraph>
		</div>
	)
}
