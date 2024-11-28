/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				umgray: {
				  900: '#141619',
				  800: '#2C2E3A',
				},
				umgreen: {
				  600: '#61892F',
				  500: '#86C232',
				},
				umdarkgray: {
				  900: '#222629',
				  700: '#474B4F',
				  600: '#6B6E70',
				},
			  },
			fontFamily:{
				mono: ['Ubuntu Mono', 'monospace'],
			}
		},
	},
	plugins: [require('flowbite/plugin')],
}
