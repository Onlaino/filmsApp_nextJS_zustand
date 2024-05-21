'use client';

import { Search } from '../Search/Search';
import { Button } from '../ui/Button/Button';
import { Heading } from '../ui/Heading/Heading';
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
