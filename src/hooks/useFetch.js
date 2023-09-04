import { useCallback, useEffect, useReducer } from 'react';
import { useIsMounted } from './useIsMounted';

const FETCHER_ACTIONS = {
	PENDING: 'pending',
	REJECTED: 'rejected',
	RESOLVED: 'resolved',
};

const fetcherReducer = (state, action) => {
	switch (action.type) {
		case FETCHER_ACTIONS.PENDING: {
			return {
				status: 'pending',
				error: null,
				data: null,
			};
		}
		case FETCHER_ACTIONS.REJECTED: {
			return {
				status: 'rejected',
				error: action.error,
				data: null,
			};
		}
		case FETCHER_ACTIONS.RESOLVED: {
			return {
				status: 'resolved',
				error: null,
				data: action.data,
			};
		}
		default:
			throw new Error(`Une erreur est survenue à l'action ${action.type}`);
	}
};

export const useFetch = (url, config) => {
	const [{ status, data, error }, dispatch] = useReducer(fetcherReducer, {
		status: 'idle',
		data: null,
		error: null,
	});

	const isMounted = useIsMounted();

	const run = useCallback(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		dispatch({ type: FETCHER_ACTIONS.PENDING });

		fetch(url, { ...config, signal })
			.then(async (res) => {
				const json = await res.json();

				if (!isMounted()) {
					return;
				}

				if (res.ok) {
					dispatch({ type: FETCHER_ACTIONS.RESOLVED, data: json });
				} else {
					dispatch({ type: FETCHER_ACTIONS.REJECTED, error: json });
				}
			})
			.catch((error) => {
				if (!isMounted()) {
					return;
				}

				dispatch({ type: FETCHER_ACTIONS.REJECTED, error });
			});

		return () => {
			controller.abort();
		};
	}, [config, url, isMounted]);

	useEffect(() => {
		run();
	}, [run]);

	const isIdle = status === 'idle';
	const isPending = status === FETCHER_ACTIONS.PENDING;
	const isResolved = status === FETCHER_ACTIONS.RESOLVED;
	const isRejected = status === FETCHER_ACTIONS.REJECTED;

	return {
		status,
		data,
		error,
		isIdle,
		isPending,
		isRejected,
		isResolved,
		run,
	};
};
