'use client'
import cl from './SingInForm.module.css'
import { FormEventHandler, useState } from 'react'
import { Search } from '../Search/Search'
import { Button } from '../ui/Button/Button'
import { Heading } from '../ui/Heading/Heading'
import { usePersonStore } from '@/store'
import { redirect } from 'next/navigation'

export const SingInForm = () => {
	const login = usePersonStore((state) => state.login)
	const [name, setName] = useState<string>('')


	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()
		login(name)
		redirect('/')
	}

	return (
		<form className={cl.form} onSubmit={handleSubmit}>
			<Heading>Вход</Heading>
			<Search
				required
				onChange={(e) => {
					setName(e.target.value)
				}}
				value={name}
				placeholder='Ваше имя'
			/>
			<Button type='submit' variant='primary'>Войти в профиль</Button>
		</form>
	)
}
