import { NAV_LINKS } from '@/src/lib/config';
import Link from 'next/link';

export const NavLink = ({ className, classLink, toggle }) => {
	return (
		<nav className={className}>
			{NAV_LINKS.map(({ url, name, icon }) => (
				<Link
					key={name}
					href={url}
					className={classLink}
					onClick={() => toggle?.()}
				>
					{icon} <span>{name}</span>
				</Link>
			))}
		</nav>
	);
};
