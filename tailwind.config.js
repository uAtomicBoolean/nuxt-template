/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
	content: [
		'./pages/**/*.{ts,tsx,vue}',
		'./components/**/*.{ts,tsx,vue}',
		'./app/**/*.{ts,tsx,vue}',
		'./src/**/*.{ts,tsx,vue}',
		'./node_modules/preline/preline.js',
	],
	theme: {
		extend: {
			colors: {
				primary: colors.red,
				gray: colors.zinc,
			},
		},
	},

	plugins: [
		require('preline/plugin'),
	],
};
