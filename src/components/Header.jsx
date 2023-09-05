import { FULL_NAME } from '../lib/config';
import { ToggleThemeButton } from './ToggleThemeButton';
import { NavLink } from './atom/NavLinks';

export const Header = () => {
	return (
		<header className='flex py-6 mb-20'>
			<span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]'>
				{FULL_NAME}
			</span>
			<NavLink />
			<ToggleThemeButton />
		</header>
	);
};
