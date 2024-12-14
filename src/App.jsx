import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Contact } from "./pages";
import { Header, Footer, Loader } from "./components";
import { useEffect, useState } from "react";

function App() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsMounted(true);
		}, 1000);

		() => clearTimeout(timeoutId);
	}, []);

	if (!isMounted) {
		return <Loader />;
	}
	return (
		<main className="max-w-[1500px] mx-auto relative bg-black min-h-screen">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	);
}

export default App;
