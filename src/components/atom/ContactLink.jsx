import Link from 'next/link';
import { SiGithub, SiLinkedin, SiMaildotru } from 'react-icons/si';

/**
 * Link Next component styled like a button
 *
 * @param {string} url href url
 * @param children Children of the link
 * @returns {JSX.Element}
 */
const LinkButton = ({ url, children }) => {
	return (
		<Link
			href={url}
			className='inline-flex items-center justify-center rounded-md text-sm font-medium  bg-primary text-white gap-1 hover:scale-105 h-10 px-4 py-2'
		>
			{children}
		</Link>
	);
};

/**
 * Links to my contacts
 * @returns {JSX.Element}
 */
export const ContactLink = () => {
	return (
		<div className='flex gap-4 py-2'>
			<LinkButton url='https://www.linkedin.com/in/simon-honore/'>
				<SiLinkedin />
				<span>LinkedIn</span>
			</LinkButton>

			<LinkButton url='https://github.com/Simon-Honore'>
				<SiGithub />
				<span>Github</span>
			</LinkButton>

			<LinkButton url='mailto:simon.honore6@gmail.com?subject=Contact portfolio'>
				<SiMaildotru />
				<span>Mail</span>
			</LinkButton>
		</div>
	);
};
