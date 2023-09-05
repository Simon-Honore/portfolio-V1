export const SectionWrapper = ({ children, title }) => {
	return (
		<div className='flex flex-col items-center gap-8'>
			<h2 className='font-bold text-4xl text-skin-secondary'>{title}</h2>
			{children}
		</div>
	);
};
