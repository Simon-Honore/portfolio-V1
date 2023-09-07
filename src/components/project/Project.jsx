import Link from 'next/link';

export const Project = ({
	description,
	homepageUrl,
	name,
	stargazerCount,
	url,
}) => {
	return (
		<div className='flex flex-col shadow-sm shadow-black dark:shadow-white gap-4 p-4 bg-paper w-60 rounded-xl transition-transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 md:w-80 md:p-8'>
			<p className='w-full text-right'>⭐ {stargazerCount}</p>
			<Link href={url}>
				<h3 className='text-2xl font-semibold'>{name}</h3>
			</Link>
			<p>{description}</p>
			{homepageUrl ? (
				<Link href={homepageUrl}>{homepageUrl.replace('https://', '')}</Link>
			) : null}
		</div>
	);
};
