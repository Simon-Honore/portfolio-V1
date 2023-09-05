import {
	SiNextdotjs,
	SiReact,
	SiFigma,
	SiTailwindcss,
	SiJavascript,
	SiTypescript,
	SiSass,
	SiNodedotjs,
	SiExpress,
	SiPostgresql,
	SiMongodb,
} from 'react-icons/si';
import {
	IoCodeSlashSharp,
	IoDocumentTextOutline,
	IoGameController,
} from 'react-icons/io5';

export const FULL_NAME = 'Simon Honoré';

export const GITHUB_USERNAME = 'Simon-Honore';

export const NAV_LINKS = [
	{
		url: '/#Skills',
		name: 'Skills',
		icon: <IoCodeSlashSharp />,
	},
	{
		url: '/#Projects',
		name: 'Projects',
		icon: <IoCodeSlashSharp />,
	},
	{
		url: '/Simon_Honore.pdf',
		name: 'My Resume',
		icon: <IoDocumentTextOutline />,
	},
	{
		url: '/',
		name: 'Amusez-vous',
		icon: <IoGameController />,
	},
];

export const SKILLS = [
	{
		tag: 'Design',
		list: [
			{
				icon: <SiFigma />,
				name: 'Figma',
			},
			{
				icon: <SiTailwindcss />,
				name: 'Tailwind',
			},
			{
				icon: <SiSass />,
				name: 'SASS',
			},
		],
	},
	{
		tag: 'Front-end',
		list: [
			{
				icon: <SiJavascript />,
				name: 'Javascript',
			},
			{
				icon: <SiTypescript />,
				name: 'Typescript',
			},
			{
				icon: <SiReact />,
				name: 'React',
			},
			{
				icon: <SiNextdotjs />,
				name: 'Next.js',
			},
		],
	},
	{
		tag: 'Back-end',
		list: [
			{
				icon: <SiNodedotjs />,
				name: 'Node.js',
			},
			{
				icon: <SiExpress />,
				name: 'Express.js',
			},
			{
				icon: <SiPostgresql />,
				name: 'PostgreSQL',
			},
			{
				icon: <SiMongodb />,
				name: 'MongoDB',
			},
		],
	},
];
