import { NAV_LINKS } from '@/src/lib/config';
import Link from 'next/link';

export const NavLink = () => {
	return (
		<nav className='flex ml-auto gap-4'>
			{NAV_LINKS.map(({ url, name, icon }) => (
				<Link
					key={name}
					href={url}
					className='flex items-center gap-1 text-base'
				>
					{icon} <span>{name}</span>
				</Link>
			))}
		</nav>
	);
};
