/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
