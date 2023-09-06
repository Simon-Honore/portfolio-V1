export const BurgerMenu = ({ toggle }) => {
	return (
		<>
			<div
				className='w-10 h-10 flex flex-col justify-around p-1'
				onClick={toggle}
			>
				<span className='w-full bg-primary h-1'></span>
				<span className='w-full bg-primary h-1'></span>
				<span className='w-full bg-primary h-1'></span>
			</div>

			{/* <div className='absolute left-0 z-50 w-screen'>
				<p>item</p>
				<p>item</p>
				<p>item</p>
				<p>item</p>
			</div> */}
		</>
	);
};
