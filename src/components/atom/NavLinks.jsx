import { NAV_LINKS } from '@/src/lib/config';
import Link from 'next/link';

/**
 * Navigation of site
 *
 * @param {string} className ClassName of the nav
 * @param {string} classLink ClassName of the links
 * @param {func} toggle Optional - Function to toggle the nav menu
 * @returns {JSX.Element}
 */
export const NavLink = ({ className, classLink, toggle }) => {
	return (
		<nav className={className}>
			{NAV_LINKS.map(({ url, name, icon, config }) => (
				<Link
					key={name}
					href={url}
					className={classLink}
					onClick={() => toggle?.()}
					{...config}
				>
					{icon} <span>{name}</span>
				</Link>
			))}
		</nav>
	);
};
