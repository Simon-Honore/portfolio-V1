import { SectionWrapper } from '../atom/SectionWrapper';
import { MemoryBoard } from './MemoryBoard';
import { MemoryContextProvider, useMemoryContext } from './MemoryProvider';

export const MemorySection = () => {
	return (
		<SectionWrapper title="Let's play a memory game !">
			<MemoryContextProvider>
				<div className='flex flex-col items-center gap-14'>
					<div className='flex flex-col items-center gap-4'>
						<MemoryScore />
						<MemoryBoard />
						<ButtonReset />
					</div>
				</div>
			</MemoryContextProvider>
		</SectionWrapper>
	);
};

const ButtonReset = () => {
	const { resetBoard } = useMemoryContext();

	return (
		<button
			className='inline-flex items-center justify-center rounded-md text-sm font-medium  bg-primary text-white gap-1 hover:scale-105 h-10 px-4 py-2'
			onClick={resetBoard}
		>
			Reset go here
		</button>
	);
};

const MemoryScore = () => {
	const { tryCount, isWon } = useMemoryContext();

	if (isWon) {
		return <p>Well done! You won in {tryCount} tries.</p>;
	}

	return (
		<p>
			You try <b>{tryCount}</b> times.
		</p>
	);
};
