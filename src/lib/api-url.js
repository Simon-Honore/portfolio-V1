export const getListPinnedRepositoriesURL = (username) => {
	return `/api/pinnedGithubRepositories?username=${username}`;
};
