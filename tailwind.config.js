/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
	content: [
		'src/components/**/*.{vue,js,ts}',
		'src/layouts/**/*.vue',
		'src/pages/**/*.vue',
		'src/composables/**/*.{js,ts}',
		'src/plugins/**/*.{js,ts}',
		'src/utils/**/*.{js,ts}',
		'src/App.{js,ts,vue}',
		'src/app.{js,ts,vue}',
		'src/Error.{js,ts,vue}',
		'src/error.{js,ts,vue}',
		'src/app.config.{js,ts}',
	],
	theme: {
		extend: {
			colors: {
				primary: colors.green,
				gray: colors.zinc,
			},
		},
	},
};
