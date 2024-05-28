'use client'
import { usePersonStore } from '@/store'
import cl from './Login.module.css'
import { SingInForm } from '@/components/SignInForm/SingInForm'
import { redirect } from 'next/navigation'

export default function LoginPage() {
	const { jwt } = usePersonStore(s => s)

	if (jwt) redirect('/')

	return (
		<div className={cl.login}>
			<SingInForm />
		</div>
	)
}
