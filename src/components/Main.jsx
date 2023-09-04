import { HeroSection } from './hero/HeroSection';
import { ProjectsSection } from './project/ProjectsSection';

export const Main = () => {
	return (
		<main className='flex-grow flex flex-col gap-20'>
			<HeroSection />
			<ProjectsSection />
		</main>
	);
};
