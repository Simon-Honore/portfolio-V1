import { DrawSection } from '@/src/components/draw/DrawSection';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamic import Memory Section
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
				<title>Have fun!</title>
			</Head>
			<div className='flex flex-col gap-28'>
				<DynamicMemorySection />
				<DrawSection />
			</div>
		</>
	);
}
