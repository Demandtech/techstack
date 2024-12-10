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
				chivo: ["Chivo", "sans-serif"],
				jersey: ["Jersey 10", "sans-serif"],
				cousine: ["cousine", "sans-serif"],
			},
			keyframes: {
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeIn: {
					to: { opacity: 0.5 },
				},
			},
			animation: {
				fadeInUp: "fadeInUp 0.7s ease-out",
				fadeIn: "fadeIn 0.7s ease-out",
			},
			backgroundImage: {
				header: "url(./assets/header.png)",
				headersm: "url(./assets/header-sm.png)",
				blackbtn: "url(./assets/blackbutton.png)",
				lightbluebtn: "url(./assets/lightbluebutton.png)",
				borderedbtn: "url(./assets/borderered.png)",
				bluebtn: "url(./assets/bluebtn.png)",
				speakerlayer: "url(./assets/speaker-layer.png)",
				shirtwhitebg: "url(./assets/shirt-bg.png)",
				basic: "url(./assets/ticket1.png)",
				vip: "url(./assets/ticket2.png)",
				vvip: "url(./assets/ticket3.png)",
				footer: "url(./assets/footer-large.png)",
				footersm: "url(./assets/footer-mobile.png)",
			},
		},
	},
	plugins: [],
};
