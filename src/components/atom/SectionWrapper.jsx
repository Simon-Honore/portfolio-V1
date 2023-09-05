export const SectionWrapper = ({ children, title, icon }) => {
	return (
		<div className='flex flex-col items-center gap-14'>
			<h2
				className='font-bold text-4xl text-skin-secondary flex items-center gap-2'
				id={title}
			>
				<span className='text-primary'>{icon}</span>
				{title}
			</h2>
			{children}
		</div>
	);
};
