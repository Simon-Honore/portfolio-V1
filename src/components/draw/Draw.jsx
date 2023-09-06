import { useRef, useState } from 'react';
import { Button } from '../atom/Button';
import { DrawCanvas } from './DrawCanvas';
import { DrawControl } from './DrawControl';

const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 4;

export const Draw = () => {
	const canvas = useRef(null);
	const [colorValue, setColorValue] = useState(DEFAULT_COLOR);
	const [sizeValue, setSizeValue] = useState(DEFAULT_SIZE);

	const save = () => {
		const data = canvas.current.toDataURL();
		const link = document.createElement('a');
		link.download = 'image.png';
		link.href = data;
		link.click();
	};

	const reset = () => {
		if (canvas.current.getContext) {
			const ctx = canvas.current.getContext('2d');
			ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
		}
	};

	return (
		<div className='flex flex-col gap-8'>
			<DrawCanvas canvas={canvas} color={colorValue} size={sizeValue} />
			<DrawControl
				colorValue={colorValue}
				onChangeColor={(e) => setColorValue(e.target.value)}
				sizeValue={sizeValue}
				onChangeSize={(e) => setSizeValue(e.target.value)}
			/>
			<div className='m-auto flex gap-4'>
				<Button onClick={reset}>Reset</Button>
				<Button onClick={save}>Save my drawing</Button>
			</div>
		</div>
	);
};
