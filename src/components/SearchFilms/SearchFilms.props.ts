import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ISearchFilmsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	filmName: string
	isOpen: boolean
	setIsOpen: (b: boolean) => void
	setFileName: (str: string) => void
}
