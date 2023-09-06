import { Layout } from '@/src/components/Layout';
import { ThemeProvider, useThemeContext } from '@/src/context/ThemeProvider';
import '@/src/styles/globals.css';
import '@/src/styles/theme.css';
import clsx from 'clsx';

// HOC for aplly the theme
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
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AppWithTheme>
		</ThemeProvider>
	);
}
