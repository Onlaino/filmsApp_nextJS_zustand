'use client'
import cl from './Search.module.css'
import cn from 'classnames';
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { SearchProps } from './search.props'

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
	{className, children, placeholder, value, onChange, ...props },
	ref
) {
	return (
		<motion.div
			initial={{ x: -300 }}
			animate={{ x: 0 }}
			className={cn(cl.search, className)}
		>
			{children}
			<input
				{...props}
				value={value}
				onChange={onChange}
				className={cn(cl.searchInput)}
				type='text'
				placeholder={placeholder}
				ref={ref}
			/>
		</motion.div>
	)
})
