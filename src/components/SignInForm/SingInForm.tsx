'use client';

import { Search } from '../Search/Search.js';
import { Button } from '../ui/Button/Button.jsx';
import { Heading } from '../ui/Heading/Heading.jsx';
import cl from './SingInForm.module.css';

export const SingInForm = () => {
	return (
		<form className={cl.form}>
			<Heading>Вход</Heading>
			<Search required onChange={() => {}} value={''} placeholder='Ваше имя' />
			<Button variant='primary'>Войти в профиль</Button>
		</form>
	);
};
