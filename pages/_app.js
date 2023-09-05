import { ThemeProvider, useThemeContext } from '@/src/context/ThemeProvider';
import '@/src/styles/globals.css';
import '@/src/styles/theme.css';
import clsx from 'clsx';

const AppWithTheme = ({ children }) => {
	const { isDark } = useThemeContext();

	return (
		<div id='app' className={clsx({ dark: isDark })}>
			{children}
		</div>
	);
};

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<AppWithTheme>
				<div className='m-auto h-full max-w-7xl px-4'>
					<Component {...pageProps} />
				</div>
			</AppWithTheme>
		</ThemeProvider>
	);
}
