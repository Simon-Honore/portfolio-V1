/**
 * Wrapping the different section of the site in the same design
 *
 * @param {string} title Section title
 * @param {JSX.Element} icon Title icon
 * @param children Children of the section
 * @returns {JSX.Element}
 */
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
