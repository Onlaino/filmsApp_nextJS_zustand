'use client'
import cl from './Search.module.css'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { SearchProps } from './search.props'

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
	{ children, placeholder, value, onChange, ...props },
	ref
) {
	return (
		<motion.div initial={{x: -300}} animate={{x: 0}} className={cl.search}>
			{children}
			<input
				{...props}
				value={value}
				onChange={onChange}
				className={cl.searchInput}
				type='text'
				placeholder={placeholder}
				ref={ref}
			/>
		</motion.div>
	)
})
