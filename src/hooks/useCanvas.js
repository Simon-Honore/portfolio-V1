import { getCoordinates } from '../lib/canvas';
import { useRef, useState, useEffect, useCallback } from 'react';

const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 4;

export const useCanvas = () => {
	const canvas = useRef(null);

	const [colorValue, setColorValue] = useState(DEFAULT_COLOR);
	const [sizeValue, setSizeValue] = useState(DEFAULT_SIZE);

	const isDrawing = useRef(false);
	const lastCoordinate = useRef(null);

	const startDrawing = useCallback((event) => {
		isDrawing.current = true;
		const coordinate = getCoordinates(event, canvas.current);
		lastCoordinate.current = coordinate;
	}, []);

	const stopDrawing = () => {
		if (isDrawing?.current === false) {
			return;
		}
		isDrawing.current = false;
	};

	const draw = useCallback(
		(event) => {
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
		},
		[colorValue, sizeValue],
	);

	const changeColor = (newColor) => {
		setColorValue(newColor);
	};

	const changeSize = (newSize) => setSizeValue((curr) => (curr = newSize));

	useEffect(() => {
		window.addEventListener('mouseup', stopDrawing);
		window.addEventListener('touchend', stopDrawing);

		return () => {
			window.removeEventListener('mouseup', stopDrawing);
			window.removeEventListener('touchend', stopDrawing);
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

	// ====== To use this canvas on a touch screen =======
	const startDrawingMobile = useCallback(
		(e) => {
			e.preventDefault();
			const touch = e.touches[0];
			const coordinates = {
				clientX: touch.clientX,
				clientY: touch.clientY,
			};
			startDrawing(coordinates);
		},
		[startDrawing],
	);

	const drawingMobile = useCallback(
		(e) => {
			e.preventDefault();
			const touch = e.touches[0];
			const coordinates = {
				clientX: touch.clientX,
				clientY: touch.clientY,
			};
			draw(coordinates);
		},
		[draw],
	);

	useEffect(() => {
		const canvas = document.getElementById('canvas');
		canvas.addEventListener('touchstart', startDrawingMobile);
		canvas.addEventListener('touchmove', drawingMobile);

		return () => {
			canvas.removeEventListener('touchstart', startDrawingMobile);
			canvas.removeEventListener('touchmove', drawingMobile);
		};
	}, [drawingMobile, startDrawingMobile]);
	// ===========================

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
