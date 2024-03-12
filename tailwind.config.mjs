/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {

	addUtilities({
	  ".my-rotate-y-180": {
		transform: "rotateY(180deg)",
	},
	  ".preserve-3d": {
		transformStyle: "preserve-3d",
	},
	  ".perspective": {
		perspective: "1000px",
	},
	  ".backface-hidden": {
		backfaceVisibility: "hidden",
	},
	})
})

module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		// screens: {
		// 	'mac': '1440px',
		// },
		extend: {
			// screens: {
			// 	'mac': '1440px',
			// },
			fontFamily: {
				'open_sans': ["Open Sans","sans-serif"],
				'lora': ["Lora","serif"]
			},
			colors: {
				"body": "#225FC9",
				"background": "#1F1D1D",
				"gl_blue": "#225fc9",
				"gl_light_blue": "#3b82f680",
				"gl_sky_blue": "#79bcfc",
				"gl_dark_blue": "#061B36"
			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
						'0%': { transform: 'translateX(100%)' },
						'100%': { transform: 'translateX(0%)' }
				},
				sliding: {
					'0%': { transform: 'translateY(200%)',  },
					'50%': { transform: 'translateY(0%)' , animationTimingFunction: 'ease-in-out', animationDelay: '50ms', animationDuration: '4s' },
					'100%': { transform: 'translateY(-200%)' }
				},
				slow_sliding: {
					'0%': { transform: 'translateY(200%)',  },
					'50%': { transform: 'translateY(0%)' , animationTimingFunction: 'ease-in-out', animationDelay: '50ms', animationDuration: '6s' },
					'100%': { transform: 'translateY(-200%)' }
				},
			},
			flip: {
				".my-rotate-y-180": {
					transform: "rotateY(180deg)",
				},
				  ".preserve-3d": {
					transformStyle: "preserve-3d",
				},
				  ".perspective": {
					perspective: "1000px",
				},
				  ".backface-hidden": {
					backfaceVisibility: "hidden",
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"marquee": 'marquee 40s linear infinite',
				"marquee2": 'marquee2 40s linear infinite',
				"sliding": 'sliding 10s infinite',
				"slow_sliding": 'slow_sliding 11s infinite',
			},
		},
	},
	plugins: [Myclass][require("tailwindcss-animate")],
}
