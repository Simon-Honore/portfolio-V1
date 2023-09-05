import { ContactLink } from './atom/ContactLink';

export const Footer = () => {
	return (
		<footer className='mt-20 border-t-4 border-primary border-double p-10 flex flex-col items-center gap-6'>
			<ContactLink />
			<div className='flex flex-col gap-2 text-sm'>
				<p>Designed and built by Simon Honoré</p>
				<p>©Copyright 2023 - Simon Honoré</p>
			</div>
		</footer>
	);
};
