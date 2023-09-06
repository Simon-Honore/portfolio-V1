/**
 * Simple button
 *
 * @param props All props that u button can take
 * @param children Children of the button
 * @returns {JSX.Element}
 */
export const Button = ({ children, ...props }) => {
	return (
		<button
			className='inline-flex items-center justify-center rounded-md text-sm font-medium  bg-primary text-white gap-1 hover:scale-105 h-10 px-4 py-2'
			{...props}
		>
			{children}
		</button>
	);
};
