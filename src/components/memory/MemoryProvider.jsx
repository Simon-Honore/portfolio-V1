import { createContext, useContext, useMemo, useState } from 'react';
import {
	CARD_STATE,
	getInitialMemory,
	isMemoryFinished,
	isPairCards,
} from '../../lib/memory';

const MemoryContext = createContext(null);

export const useMemoryContext = () => {
	const context = useContext(MemoryContext);

	if (!context) {
		throw new Error('MemoryContext must be used inside MemoryContextProvider');
	}

	return context;
};

export const MemoryContextProvider = ({ children }) => {
	const [cards, setCards] = useState(() => getInitialMemory());
	const [tryCount, setTryCount] = useState(0);

	// To reset the board
	const resetBoard = () => {
		setCards(() => getInitialMemory());
		setTryCount(0);
	};

	/**
	 * By click on a card : to change the state of the card targeted to returned
	 * If 2 cards are returned => check whether they are identical and change their state
	 * @param {object} cardClicked
	 */
	const onClickCard = (cardClicked) => {
		if (cardClicked.state !== CARD_STATE.HIDE) {
			return;
		}

		const returnedCards = cards.filter(
			(card) => card.state === CARD_STATE.RETURNED,
		);

		if (returnedCards.length === 2 || returnedCards.includes(cardClicked)) {
			return;
		}

		setCards((curr) =>
			curr.map((card) => {
				if (card.id === cardClicked.id) {
					card.state = CARD_STATE.RETURNED;
				}

				return card;
			}),
		);

		if (returnedCards.length === 0) {
			return;
		}

		returnedCards.push(cardClicked);

		const isPair = isPairCards(...returnedCards);

		changeStateReturnedCards(isPair, returnedCards);
	};

	/**
	 * To change state of returned cards and increment tryCount by 1
	 * If isPair = true => state = find | time 200
	 * If isPair = false => state = hide | time 1000
	 * @param {bool} isPair
	 * @param {array} retournedCards
	 * @return set cards with modified state
	 */
	const changeStateReturnedCards = (isPair, retournedCards) => {
		setTimeout(
			() => {
				setCards((curr) => {
					return curr.map((card) => {
						if (
							card.state === CARD_STATE.RETURNED &&
							retournedCards.includes(card)
						) {
							card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
						}
						return card;
					});
				});

				setTryCount((curr) => curr + 1);
			},
			isPair ? 200 : 1000,
		);
	};

	const isWon = useMemo(() => isMemoryFinished(cards), [cards]);

	const values = { cards, tryCount, resetBoard, onClickCard, isWon };

	return (
		<MemoryContext.Provider value={values}>{children}</MemoryContext.Provider>
	);
};
