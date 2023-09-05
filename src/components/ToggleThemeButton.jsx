import styles from './ToggleThemeButton.module.css';
import clsx from 'clsx';
import { useThemeContext } from '../context/ThemeProvider';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';

export const ToggleThemeButton = () => {
	const { isLight, isDark, toggleTheme } = useThemeContext();

	return (
		<div className='shadow-sm shadow-slate-600 dark:shadow-slate-200 relative overflow-hidden rounded-full border-primary p-2 ml-2'>
			<IoSunnySharp
				onClick={toggleTheme}
				className={clsx('relative h-6 w-6 cursor-pointer text-primary', {
					[styles.enter]: isLight,
					[styles.exit]: isDark,
				})}
			/>
			<IoMoonSharp
				onClick={toggleTheme}
				className={clsx('absolute top-2 h-6 w-6 cursor-pointer text-primary', {
					[styles.enter]: isDark,
					[styles.exit]: isLight,
				})}
			/>
		</div>
	);
};
