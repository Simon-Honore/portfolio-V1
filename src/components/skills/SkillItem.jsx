export const SkillItem = ({ list }) => {
	return (
		<ul className='flex flex-col gap-2'>
			{list.map((item) => (
				<li key={item.name} className='flex gap-2 items-center text-lg'>
					{item.icon} <span>{item.name}</span>
				</li>
			))}
		</ul>
	);
};
