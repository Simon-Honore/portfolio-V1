export const Button = ({ children }) => {
	return (
		<button className='inline-flex items-center justify-center rounded-md text-sm font-medium  bg-primary text-white gap-1 hover:scale-105 h-10 px-4 py-2'>
			{children}
		</button>
	);
};
