import { FULL_NAME } from '@/src/lib/config';
import Image from 'next/image';
import { ContactLink } from '../atom/ContactLink';

export const HeroSection = () => {
	return (
		<div className='relative flex flex-col items-center gap-6 md:flex-row-reverse md:items-start md:mb-40 lg:mb-24'>
			<Image
				width={300}
				height={300}
				src='/images/me.png'
				alt='me'
				quality={90}
				className=' rounded-3xl shadow-lg shadow-gray-600 md:mr-4 mr-0'
			/>
			<div className='md:absolute md:left-0 md:mr-[140px] md:mt-3 mobile:text-center '>
				<h1 className='text-6xl dark:drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] md:text-8xl'>
					I&apos;m{' '}
					<span className='bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent'>
						{FULL_NAME}
					</span>
				</h1>

				<p className=' max-w-xl md:text-2xl text-lg drop-shadow-[0_0px_2px_rgba(255,255,255,0.5)] dark:drop-shadow-[0_0px_2px_rgba(0,0,0,1)] py-4 mobile:text-justify'>
					<b>Front-end web developer</b> A pure product of retraining, I&apos;ve
					completed my RNCP DWWM qualification. Specialising in React and open
					to other technologies, I&apos;m always looking to improve. If
					you&apos;re looking for a developer in the Vendée, Maine-et-Loire or
					full-remote, contact me! 🚀
				</p>

				<ContactLink />
			</div>
		</div>
	);
};
