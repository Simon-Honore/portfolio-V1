import Link from 'next/link';
import { FULL_NAME } from '../lib/config';
import { ToggleThemeButton } from './ToggleThemeButton';
import { NavLink } from './atom/NavLinks';
import { BurgerMenu } from './BurgerMenu';
import { useReducer } from 'react';
import clsx from 'clsx';

export const Header = () => {
	const [isMenuOpen, toggleMenu] = useReducer((state) => !state, false);

	return (
		<header className='flex flex-col gap-6 py-6'>
			<div className='flex justify-between items-center w-full'>
				<Link
					href={'/'}
					className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)]'
				>
					{FULL_NAME}
				</Link>
				<div className='flex gap-4 tablet:hidden'>
					<NavLink
						className='flex gap-4 '
						classLink='flex items-center gap-1 font-medium'
					/>
					<ToggleThemeButton />
				</div>
				<div className='tablet:flex hidden gap-5'>
					<ToggleThemeButton />
					<BurgerMenu toggle={toggleMenu} isMenuOpen={isMenuOpen} />
				</div>
			</div>

			<div
				className={clsx(
					{ hidden: !isMenuOpen },
					'bg-background brightness-[1.5] rounded-t-lg ',
				)}
			>
				<NavLink
					toggle={toggleMenu}
					className='flex flex-col items-center '
					classLink='flex items-center justify-center text-xl gap-1 p-3 w-full border-b border-b-primary'
				/>
			</div>
		</header>
	);
};
