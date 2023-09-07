import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = ({ children }) => {
	return (
		<div className='m-auto h-full max-w-7xl px-4 flex flex-col gap-24 min-h-screen'>
			<Header />
			<main className='flex-grow '>{children}</main>
			<Footer />
		</div>
	);
};
