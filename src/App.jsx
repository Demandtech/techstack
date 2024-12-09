import {
	Hero,
	Header,
	Venue,
	Why,
	Speakers,
	Tickets,
	Shirts,
} from "./components";

function App() {
	return (
		<main className="max-w-[1440px] mx-auto relative bg-black min-h-screen">
			<Header />
			<Hero />
			<Venue />
			<Why />
			<Speakers />
			<Tickets />
			<Shirts />
		</main>
	);
}

export default App;
