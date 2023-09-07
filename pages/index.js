import { HeroSection } from '@/src/components/hero/HeroSection';
import { ProjectsSection } from '@/src/components/project/ProjectsSection';
import { SkillsSection } from '@/src/components/skills/SkillsSection';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Simon Honoré</title>
			</Head>
			<div className='flex flex-col gap-28'>
				<HeroSection />
				<SkillsSection />
				<ProjectsSection />
			</div>
		</>
	);
}
