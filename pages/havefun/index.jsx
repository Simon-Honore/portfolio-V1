import { DrawSection } from '@/src/components/draw/DrawSection';
import { MemorySection } from '@/src/components/memory/MemorySection';
import Head from 'next/head';

export default function HaveFun() {
	return (
		<>
			<Head>
				<title>Portfolio Simon Honoré</title>
			</Head>
			<div className='flex flex-col gap-40'>
				<MemorySection />
				<DrawSection />
			</div>
		</>
	);
}
