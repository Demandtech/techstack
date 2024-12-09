import speaker_one from "./assets/speaker1.png";
import speaker_two from "./assets/speaker2.png";
import speaker_three from "./assets/speaker3.png";
import speaker_four from "./assets/speaker4.png";
import shirt_1 from "./assets/shirt1.png";
import shirt_2 from "./assets/shirt1.png";
import shirt_3 from "./assets/shirt1.png";
import shirt_4 from "./assets/shirt1.png";

export const shirts = [
	shirt_1,
	shirt_2,
	shirt_3,
	shirt_4
];

export const tickets = [
	{
		slug: "basic",
		name: "Basic Ticket",
		price: 5000,

		attractions: [
			"This ticket only guarantees you a seat and entry into general area of the main hall.",
		],
	},
	{
		slug: "vip",
		name: "Vip Ticket",
		price: 10000,

		attractions: [
			"This ticket guarantees you a seat in the main hall.",
			"Access to the speakers and networking",
			"Complimentary drinks",
		],
	},
	{
		slug: "v-vip",
		name: "VVip Ticket",
		price: 15000,

		attractions: [
			"This ticket guarantees you a seat at the VVIP Table at the front of the main hall.",
			"Access to the speakers and networking.",
			"Complimentary drinks.",
			"Gift and Packages from sponsors.",
		],
	},
];
export const speakers = [
	{
		name: "Adeleye Giwon",
		role: "AI Machine Expert",
		image: speaker_one,
	},
	{
		name: "Adeleye Giwon",
		role: "AI Machine Expert",
		image: speaker_two,
	},
	{
		name: "Adeleye Giwon",
		role: "AI Machine Expert",
		image: speaker_three,
	},
	{
		name: "Adeleye Giwon",
		role: "AI Machine Expert",
		image: speaker_four,
	},
	{
		name: "Adeleye Giwon",
		role: "AI Machine Expert",
		image: speaker_one,
	},
	{
		name: "Adeleye Giwon",
		role: "AI Machine Expert",
		image: speaker_two,
	},
	{
		name: "Adeleye Giwon",
		role: "AI Machine Expert",
		image: speaker_three,
	},
	{
		name: "Adeleye Giwon",
		role: "AI Machine Expert",
		image: speaker_four,
	},
];

export const why = [
	{
		number: "01",
		title: "Learn from the Best",
		text: "Hear firsthand from experienced senior developers, startup CEOs, and CTOs who are at the forefront of tech innovation.",
	},
	{
		number: "02",
		title: "Networking Opportunities",
		text: "Connect with like-minded developers, industry leaders, and potential employers.",
	},
	{
		number: "03",
		title: "Career Growth",
		text: "Discover the latest job trends, skills in demand, and how to level up your career.",
	},
	{
		number: "04",
		title: "Expand Your Knowledge",
		text: "Dive into the latest programming languages, tech stacks, and frameworks shaping the future of development.",
	},
];
