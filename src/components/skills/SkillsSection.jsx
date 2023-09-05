import { SKILLS } from '@/src/lib/config';
import { SectionWrapper } from '../atom/SectionWrapper';
import { SkillItem } from './SkillItem';

const SkillsList = () => {
	return (
		<div className='flex w-full justify-around'>
			{SKILLS.map((skill) => (
				<div key={skill.tag} className='w-40'>
					<h4 className='font-semibold text-2xl mb-4'>{skill.tag}</h4>
					<SkillItem {...skill} />
				</div>
			))}
		</div>
	);
};

export const SkillsSection = () => {
	return (
		<SectionWrapper title='Skills'>
			<SkillsList />
		</SectionWrapper>
	);
};
