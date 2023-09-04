/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			textColor: {
				skin: {
					primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
					secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
				},
			},
			colors: {
				background: 'rgb(var(--color-background) / <alpha-value>)',
				paper: 'rgb(var(--color-paper) / <alpha-value>)',

				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
			},
		},
	},
	plugins: [],
};
