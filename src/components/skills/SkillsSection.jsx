import { SKILLS } from '@/src/lib/config';
import { SectionWrapper } from '../atom/SectionWrapper';
import { SkillItem } from './SkillItem';
import { IoConstructOutline } from 'react-icons/io5';
import clsx from 'clsx';

const SkillsList = () => {
	return (
		<div className='flex w-full justify-around mobile:flex-col mobile:gap-8 mobile:items-center'>
			{SKILLS.map((skill) => (
				<div
					key={skill.tag}
					className={clsx(
						{
							'bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent':
								skill.tag === 'Front-end',
						},
						'w-40 mobile:text-center',
					)}
				>
					<h4 className='font-bold text-2xl mb-4'>{skill.tag}</h4>
					<SkillItem {...skill} />
				</div>
			))}
		</div>
	);
};

export const SkillsSection = () => {
	return (
		<SectionWrapper title='Skills' icon={<IoConstructOutline />}>
			<SkillsList />
		</SectionWrapper>
	);
};
