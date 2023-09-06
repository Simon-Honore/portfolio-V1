import { useCallback, useEffect, useRef, useState } from 'react';
import { getCoordinates } from '../../lib/canvas';
import { useWidthScreen } from '@/src/hooks/useWidthScreen';

export const DrawCanvas = ({ canvas, startDrawing, draw }) => {
	const widthScreen = useWidthScreen();

	return (
		<canvas
			id='canvas'
			onMouseDown={startDrawing}
			onMouseMove={draw}
			width={widthScreen > 600 ? 560 : widthScreen - 40}
			height={315}
			ref={canvas}
			className='m-auto rounded-md bg-white shadow-md'
		/>
	);
};
