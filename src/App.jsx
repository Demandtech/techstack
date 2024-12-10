import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Contact } from "./pages";
import { Header, Footer } from "./components";

function App() {
	return (
		<main className="max-w-[1440px] mx-auto relative bg-black min-h-screen">
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
