import { useCallback, useEffect, useRef } from 'react';

/* GitHub Repository - Exercise */
export const useIsMounted = () => {
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	return useCallback(() => isMounted.current, []);
};
