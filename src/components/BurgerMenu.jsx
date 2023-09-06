import clsx from 'clsx';

export const BurgerMenu = ({ toggle, isMenuOpen }) => {
	return (
		<>
			<div
				className='w-9 h-10 flex flex-col justify-around overflow-hidden'
				onClick={toggle}
			>
				<span
					className={clsx(
						'w-full bg-primary h-1 transition-all duration-700 ease-in-out',
						{
							'rotate-45 origin-bottom-left': isMenuOpen,
						},
					)}
				></span>
				<span
					className={clsx(
						'w-full bg-primary h-1 transition-all duration-1000 ease-in-out',
						{ 'translate-x-10 ': isMenuOpen },
					)}
				></span>
				<span
					className={clsx(
						'w-full bg-primary h-1 transition-all duration-700 ease-in-out',
						{
							'rotate-[-45deg] origin-top-left': isMenuOpen,
						},
					)}
				></span>
			</div>
		</>
	);
};
