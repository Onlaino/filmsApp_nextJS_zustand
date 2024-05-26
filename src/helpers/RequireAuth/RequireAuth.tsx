'use client'
import { usePersonStore } from '@/store'
import { FC, useEffect } from 'react'
import { IRequireAuthProps } from './RequireAuth.props'
import { useRouter } from 'next/navigation'

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
	const jwt = usePersonStore((s) => s.jwt)
	const router = useRouter()

	useEffect(() => {
		if (!jwt) router.push('/login')
	}, [jwt, router])

	return <div>{children}</div>
}
