import { useEffect, useState } from 'react';

export const useWidthScreen = () => {
	const [widthScreen, setWidthScreen] = useState(null);

	useEffect(() => {
		const handleChange = () => {
			setWidthScreen(window.innerWidth);
		};

		window.addEventListener('resize', handleChange);

		handleChange();

		return () => {
			window.removeEventListener('resize', handleChange);
		};
	}, []);

	return widthScreen;
};
