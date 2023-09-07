export const SkillItem = ({ list }) => {
	return (
		<ul className='flex flex-col gap-2'>
			{list.map((item) => (
				<li
					key={item.name}
					className='flex gap-2 items-center text-lg font-medium'
				>
					{item.icon} <span>{item.name}</span>{' '}
					<svg width='1em' height='1em'>
						<linearGradient id='gradient' gradientTransform='rotate(45)'>
							<stop offset='0%' stopColor='rgb(var(--color-primary))' />
							<stop offset='50%' stopColor='rgb(var(--color-secondary))' />
							<stop offset='100%' stopColor='rgb(var(--color-primary))' />
						</linearGradient>
					</svg>
				</li>
			))}
		</ul>
	);
};
