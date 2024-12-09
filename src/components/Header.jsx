import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { motion } from "framer-motion";
import { MenuBar } from "./Svgs";

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header
			id="header"
			className="sticky z-50 backdrop-blur-lg bg-transparent pt-5 md:pt-10 top-0 text-white w-full"
		>
			<motion.div
				style={{
					backgroundSize: "100% 100%",
				}}
				className={`relative md:bg-header md:py-3  max-w-[95%] md:max-w-[90%] mx-auto`}
			>
				<div className="mx-auto flex flex-col md:flex-row md:items-center justify-between md:gap-5 md:px-10">
					<div
						style={{
							backgroundSize: "100% 100%",
						}}
						className={`py-5  px-6 md:px-0 md:py-0 flex justify-between items-center bg-headersm md:bg-none`}
					>
						<img className="w-[150px]" src={logo} />
						<button
							onClick={() => setOpenMenu((prev) => !prev)}
							className="md:hidden"
						>
							<MenuBar />
						</button>
					</div>
					<motion.nav
						initial={{ height: 0 }}
						animate={{ height: openMenu ? 250 : 0 }}
						className={`overflow-hidden md:px-0 bg-light-blue`}
					>
						<ul className="md:hidden border-t-4 px-2 md:border-b-0 border-black font-chivo py-5 lg:py-0 text-black flex flex-col gap-8">
							<li>
								<a href="#speakers">SPEAKERS</a>
							</li>
							<li>
								<a href="#sponsors">SPONSORS</a>
							</li>
							<li>
								<a href="#contact">CONTACT</a>
							</li>
							<li className="cursor-pointer">
								<Button aria-label="ticket button" color="black">
									GET TICKETS
								</Button>
							</li>
						</ul>
					</motion.nav>
					<nav>
						<ul className="hidden md:flex px-2 md:border-b-0 border-black font-chivo py-5 lg:py-0 text-black  items-center flex-row gap-8">
							<li>
								<a href="#speakers">SPEAKERS</a>
							</li>
							<li>
								<a href="#sponsors">SPONSORS</a>
							</li>
							<li>
								<a href="#contact">CONTACT</a>
							</li>
							<li className="cursor-pointer">
								<Button aria-label="ticket button" color="black">
									GET TICKETS
								</Button>
							</li>
						</ul>
					</nav>
				</div>
			</motion.div>
		</header>
	);
}
