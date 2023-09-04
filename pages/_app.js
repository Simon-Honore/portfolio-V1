import '@/src/styles/globals.css';
import '@/src/styles/theme.css';

export default function App({ Component, pageProps }) {
	return (
		<div id='app' className='dark'>
			<div className='m-auto h-full max-w-7xl px-4'>
				<Component {...pageProps} />
			</div>
		</div>
	);
}
