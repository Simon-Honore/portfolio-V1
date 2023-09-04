export const SectionWrapper = ({ children, title }) => {
	return (
		<div className='flex flex-col items-center gap-8'>
			<h2 className='font-semibold text-3xl text-skin-secondary'>{title}</h2>
			{children}
		</div>
	);
};
