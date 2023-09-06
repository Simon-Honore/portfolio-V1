import { getCoordinates } from '../lib/canvas';

const { useRef, useState, useEffect } = require('react');

const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 4;

export const useCanvas = () => {
	const canvas = useRef(null);
	console.log('canvas >> ', canvas);

	const [colorValue, setColorValue] = useState(DEFAULT_COLOR);
	const [sizeValue, setSizeValue] = useState(DEFAULT_SIZE);

	const isDrawing = useRef(false);
	const lastCoordinate = useRef(null);

	const startDrawing = (event) => {
		isDrawing.current = true;
		const coordinate = getCoordinates(event, canvas.current);
		lastCoordinate.current = coordinate;
	};

	const stopDrawing = () => {
		if (isDrawing?.current === false) {
			return;
		}
		isDrawing.current = false;
	};

	const draw = (event) => {
		if (isDrawing.current === true && canvas.current?.getContext) {
			const ctx = canvas.current.getContext('2d');
			const newCoordinate = getCoordinates(event, canvas.current);

			ctx.strokeStyle = colorValue;
			ctx.lineWidth = sizeValue;
			ctx.lineCap = 'round';

			ctx.beginPath();
			ctx.moveTo(lastCoordinate.current.x, lastCoordinate.current.y);
			ctx.lineTo(newCoordinate.x, newCoordinate.y);
			ctx.stroke();

			lastCoordinate.current = newCoordinate;
		}
	};

	const changeColor = (newColor) => {
		setColorValue(newColor);
	};

	const changeSize = (newSize) => setSizeValue((curr) => (curr = newSize));

	useEffect(() => {
		window.addEventListener('mouseup', stopDrawing);

		return () => {
			window.removeEventListener('mouseup', stopDrawing);
		};
	}, []);

	const save = () => {
		const data = canvas.current.toDataURL();
		const link = document.createElement('a');
		link.download = 'image.png';
		link.href = data;
		link.click();
	};

	const reset = () => {
		if (canvas.current?.getContext) {
			const ctx = canvas.current.getContext('2d');
			ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
		}
	};

	return {
		canvas,
		colorValue,
		sizeValue,
		save,
		reset,
		changeColor,
		changeSize,
		draw,
		startDrawing,
		stopDrawing,
	};
};
