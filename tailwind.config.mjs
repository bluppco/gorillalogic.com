/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'mac': '1440px',
				'2xl': '1536px'
			},
			fontFamily: {
				'open_sans': ["Open Sans","sans-serif"],
				'lora': ["Lora","serif"],
			},
			colors: {
				"body": "#225FC9",
				"background": "#1F1D1D"
			}
		},
	},
	plugins: [],
}
