import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import {
	Hero,
	Venue,
	Why,
	Speakers,
	Tickets,
	Shirts,
	Sponsors,
} from "../components";
function Home() {
	const location = useLocation();

	useLayoutEffect(() => {
		const hash = location.hash;

		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView();
			}
			return;
		}

		window.scrollTo(0, 0);
	}, [location]);
	return (
		<>
			<Hero />
			<Venue />
			<Why />
			<Speakers />
			<Tickets />
			<Shirts />
			<Sponsors />
		</>
	);
}

export default Home;
