// 'use client';
import { MainBody } from '@/components/MainBody/MainBody';
import { RequireAuth } from '@/helpers/RequireAuth/RequireAuth';
// import { usePersonStore } from '@/store';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';


export default function Home() {
	// const jwt = usePersonStore(s => s.jwt);
	// const router = useRouter()
// 
	// useEffect(() => {
		// if (!jwt) router.push('/login')
	// }, [jwt, router])

	return (
		<RequireAuth>
			<MainBody />
		</RequireAuth>
	);
}
