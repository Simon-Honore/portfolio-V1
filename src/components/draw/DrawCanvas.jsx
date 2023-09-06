import { useEffect, useRef } from 'react';
import { getCoordinates } from '../../lib/canvas';

/**
 *
 * @param {*} param0
 * @returns
 */
export const DrawCanvas = ({ canvas, startDrawing, draw }) => {
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
