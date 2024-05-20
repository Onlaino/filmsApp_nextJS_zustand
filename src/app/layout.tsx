import '../styles/global.css';
import { JetBrains_Mono } from 'next/font/google';
import { Navigation } from '@/components/Navigation/Navigation';
import type { Metadata } from 'next';

const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Поиск фильмов',
	description: 'Добавить фильмы, найти фильмы',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en, ru'>
			<link
				rel='icon'
				href='/logo.svg'
			/>
			<body className={jetBrains_Mono.className}>
				<main className='container'>
					<Navigation />
					<section className='main_section'>{children}</section>
				</main>
			</body>
		</html>
	);
}
