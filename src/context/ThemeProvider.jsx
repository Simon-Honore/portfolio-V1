import { createContext, useContext, useEffect, useState } from 'react';

// Dark mode exercise
const ThemeContext = createContext({ theme: 'light' });

const LOCAL_STORAGE_THEME_COLOR_KEY = 'ThemeColor';

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const isDark = theme === 'dark';
	const isLight = theme === 'light';

	useEffect(() => {
		const themeLocalStorage = localStorage.getItem(
			LOCAL_STORAGE_THEME_COLOR_KEY,
		);

		if (themeLocalStorage) {
			setTheme(themeLocalStorage);
			return;
		}

		const prefersColorScheme = window.matchMedia(
			'(prefers-color-scheme: dark)',
		);

		const handleChange = () => {
			setTheme(prefersColorScheme.matches ? 'dark' : 'light');
		};

		prefersColorScheme.addEventListener('change', handleChange);

		handleChange();

		return () => {
			prefersColorScheme.removeEventListener('change', handleChange);
		};
	}, []);

	const toggleTheme = () => {
		setTheme((curr) => {
			const newTheme = curr === 'dark' ? 'light' : 'dark';
			localStorage.setItem(LOCAL_STORAGE_THEME_COLOR_KEY, newTheme);
			return newTheme;
		});
	};

	const values = { theme, toggleTheme, isDark, isLight };

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	const context = useContext(ThemeContext);

	return context;
};
