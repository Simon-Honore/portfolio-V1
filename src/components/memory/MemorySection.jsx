import { Button } from '../atom/Button';
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

	return <Button onClick={resetBoard}>Reset go here</Button>;
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
