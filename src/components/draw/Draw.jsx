import { Button } from '../atom/Button';
import { DrawCanvas } from './DrawCanvas';
import { DrawControl } from './DrawControl';
import { useCanvas } from '@/src/hooks/useCanvas';

export const Draw = () => {
	const {
		canvas,
		colorValue,
		sizeValue,
		save,
		reset,
		changeColor,
		changeSize,
	} = useCanvas();

	return (
		<div className='flex flex-col gap-8'>
			<DrawCanvas canvas={canvas} color={colorValue} size={sizeValue} />
			<DrawControl
				colorValue={colorValue}
				onChangeColor={(e) => changeColor(e.target.value)}
				sizeValue={sizeValue}
				onChangeSize={(e) => changeSize(e.target.value)}
			/>
			<div className='m-auto flex gap-4'>
				<Button onClick={reset}>Reset</Button>
				<Button onClick={save}>Save my drawing</Button>
			</div>
		</div>
	);
};
