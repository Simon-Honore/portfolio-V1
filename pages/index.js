import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Main } from '@/src/components/Main';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Simon Honoré</title>
			</Head>
			<div className='flex flex-col gap-8 h-full'>
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	);
}
