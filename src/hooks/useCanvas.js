const { useRef, useState } = require('react');

const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 4;

export const useCanvas = () => {
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

	const changeColor = (newColor) => setColorValue(newColor);

	const changeSize = (newSize) => setSizeValue(newSize);

	const reset = () => {
		if (canvas.current.getContext) {
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
	};
};
