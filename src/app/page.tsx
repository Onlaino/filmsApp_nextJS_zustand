import { MainBody } from '@/components/MainBody/MainBody';
import { RequireAuth } from '@/helpers/RequireAuth/RequireAuth';


export default function Home() {
	return (
		<RequireAuth>
			<MainBody />
		</RequireAuth>
	);
}
