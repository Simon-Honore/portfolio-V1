import { useEffect } from 'react';
import { MemoryCard } from './MemoryCard';
import { useMemoryContext } from './MemoryProvider';

export const MemoryBoard = () => {
	const { cards, onClickCard, resetBoard } = useMemoryContext();

	if (!cards) {
		return <p>An error occurs, there is no board.</p>;
	}

	return (
		<div className='grid w-max grid-cols-6 grid-rows-6 gap-2'>
			{cards.map((card) => (
				<MemoryCard
					key={card.id}
					card={card}
					onClick={() => onClickCard(card)}
				/>
			))}
		</div>
	);
};
