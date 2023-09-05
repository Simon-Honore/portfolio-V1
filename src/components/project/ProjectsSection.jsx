import { useFetch } from '@/src/hooks/useFetch';
import { SectionWrapper } from '../atom/SectionWrapper';
import { getListPinnedRepositoriesURL } from '@/src/lib/api-url';
import { GITHUB_USERNAME } from '@/src/lib/config';
import { SpinnerDotted } from 'spinners-react';
import { Project } from './Project';

const ProjectsCards = () => {
	const {
		data: repos,
		isPending,
		isIdle,
		isRejected,
		isResolved,
		error,
	} = useFetch(getListPinnedRepositoriesURL(GITHUB_USERNAME));

	if (isIdle || isPending) {
		return <SpinnerDotted color='rgb(var(--color-primary))' speed={70} />;
	}

	if (isRejected) {
		return <p>{error?.error}</p>;
	}

	if (isResolved) {
		return (
			<div className='flex flex-wrap gap-6 justify-center'>
				{repos.map((repo) => (
					<Project key={repo.name} {...repo} />
				))}
			</div>
		);
	}
};

export const ProjectsSection = () => {
	return (
		<SectionWrapper title='Projects'>
			<ProjectsCards />
		</SectionWrapper>
	);
};