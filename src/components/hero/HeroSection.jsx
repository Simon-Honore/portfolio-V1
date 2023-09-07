import { FULL_NAME } from '@/src/lib/config';
import Image from 'next/image';
import { ContactLink } from '../atom/ContactLink';

// TODO - changer le texte

export const HeroSection = () => {
	return (
		<div className='relative flex flex-col items-center gap-6 md:flex-row-reverse md:items-start'>
			<Image
				width={300}
				height={300}
				src='/images/me.png'
				alt='me'
				quality={90}
				className=' rounded-3xl shadow-lg shadow-gray-600 md:mr-4 mr-0'
			/>
			<div className='md:absolute md:left-0 md:mr-[140px] md:mt-3 mobile:text-center'>
				<h1 className='text-6xl dark:drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] md:text-8xl'>
					I&apos;m{' '}
					<span className='bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent'>
						{FULL_NAME}
					</span>
				</h1>

				<p className=' max-w-xl text-xl drop-shadow-[0_0px_2px_rgba(255,255,255,0.5)] dark:drop-shadow-[0_0px_2px_rgba(0,0,0,1)] mobile:py-4 mobile:text-justify'>
					<b>Apprenti React.</b> I’m a software developer that make thing on
					internet, very happy to see your here, place holder please fill
					something here please fill something here.
				</p>

				<ContactLink />
			</div>
		</div>
	);
};
