/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blue: "#4311ff",
				yellow: "#e8d557",
				grey: "#cdcdcd",
				black: "#111111",
				"light-blue": "#b5b4ee",
				"light-purple": "#cfb4ee",
				"light-teal": "#bee9f0",
				"light-red": "#f0817e",
				"light-grey": "#eaeaea",
			},
			fontFamily: {
				chivo: ["Jersery 10", "sans-serif"],
				jersery: ["Chivo", "sans-serif"],
			},
		},
	},
	plugins: [],
};
