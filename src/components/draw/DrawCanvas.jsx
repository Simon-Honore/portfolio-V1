import { useEffect, useRef } from 'react';
import { getCoordinates } from '../../lib/canvas';

// Draw exercise
export const DrawCanvas = ({ canvas, color, size }) => {
	const isDrawing = useRef(false);
	const lastCoordinate = useRef(null);

	const startDrawing = (event) => {
		isDrawing.current = true;
		const coordinate = getCoordinates(event, canvas.current);
		lastCoordinate.current = coordinate;
	};

	const stopDrawing = () => {
		isDrawing.current = false;
	};

	const draw = (event) => {
		if (isDrawing.current === true && canvas.current.getContext) {
			const ctx = canvas.current.getContext('2d');
			const newCoordinate = getCoordinates(event, canvas.current);

			ctx.strokeStyle = color;
			ctx.lineWidth = size;
			ctx.lineCap = 'round';

			ctx.beginPath();
			ctx.moveTo(lastCoordinate.current.x, lastCoordinate.current.y);
			ctx.lineTo(newCoordinate.x, newCoordinate.y);
			ctx.stroke();

			lastCoordinate.current = newCoordinate;
		}
	};

	useEffect(() => {
		window.addEventListener('mouseup', stopDrawing);

		return () => {
			window.removeEventListener('mouseup', stopDrawing);
		};
	}, []);

	return (
		<canvas
			onMouseDown={startDrawing}
			onMouseMove={draw}
			width={560}
			height={315}
			ref={canvas}
			className='m-auto rounded-md bg-white shadow-md'
		/>
	);
};
