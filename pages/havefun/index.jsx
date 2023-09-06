import { DrawSection } from '@/src/components/draw/DrawSection';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// dynamic import Memory Section
const DynamicMemorySection = dynamic(
	() => import('../../src/components/memory'),
	{
		ssr: false,
	},
);

export default function HaveFun() {
	return (
		<>
			<Head>
				<title>Portfolio Simon Honoré</title>
			</Head>
			<div className='flex flex-col gap-40'>
				<DynamicMemorySection />
				<DrawSection />
			</div>
		</>
	);
}
