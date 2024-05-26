import cl from './Login.module.css'
import { SingInForm } from '@/components/SignInForm/SingInForm'

export default function LoginPage() {
	return (
		<div className={cl.login}>
			<SingInForm />
		</div>
	)
}
