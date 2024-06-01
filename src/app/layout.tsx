import '../styles/global.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Montserrat_Alternates } from 'next/font/google'
import { Navigation } from '@/components/Navigation/Navigation'
import type { Metadata } from 'next'

const monsterrat = Montserrat_Alternates({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Поиск фильмов',
	description: 'Добавить фильмы, найти фильмы',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en, ru'>
			<link rel='icon' href='/logo.svg' />
			<body className={monsterrat.className}>
				<main className='container'>
					<Navigation />
					<section className='main_section'>
						{children}
						<SpeedInsights />
					</section>
				</main>
			</body>
		</html>
	)
}
