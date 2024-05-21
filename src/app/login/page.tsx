import { SingInForm } from '@/components/SignInForm/SingInForm';
import cl from './Login.module.css';

export default function LoginPage() {
	return (
		<div className={cl.login}>
			<SingInForm/>
		</div>
	);
}