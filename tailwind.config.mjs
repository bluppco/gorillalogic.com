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
  });
});

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
				'lora': ["Lora","serif"]
			},

			colors: {
				"body": "#225FC9",
				"background": "#1F1D1D",
				"gl_blue": "#225fc9",
				"gl_light_blue": "#3b82f680",
				"gl_sky_blue": "#79bcfc"
			},

			animation: {
				marquee: 'marquee 40s linear infinite',
				marquee2: 'marquee2 40s linear infinite'
			},

			keyframes: {
				marquee: {
				  	'0%': { transform: 'translateX(0%)' },
				  	'100%': { transform: 'translateX(-100%)' }
				},
				marquee2: {
				  	'0%': { transform: 'translateX(100%)' },
				  	'100%': { transform: 'translateX(0%)' }
				}
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
			}

		},
	},
	plugins: [Myclass],
}
