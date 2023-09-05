import { HeroSection } from './hero/HeroSection';
import { ProjectsSection } from './project/ProjectsSection';
import { SkillsSection } from './skills/SkillsSection';

export const Main = () => {
	return (
		<main className='flex-grow flex flex-col gap-40'>
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
		</main>
	);
};
