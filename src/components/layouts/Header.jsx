import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../Button";
import { motion } from "framer-motion";
import { MenuBar } from "../Svgs";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const [scrollPos, setScrollPos] = useState(0);
	const pathname = useLocation().pathname;

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const heroHeight = document.getElementById("hero")?.offsetHeight || 0;

			const scrolledPastThreshold = currentScrollPos > heroHeight;

			setIsSticky(scrolledPastThreshold && currentScrollPos < scrollPos);
			setScrollPos(currentScrollPos);
		};
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollPos]);

	return (
		<header
			id="header"
			className={`${
				isSticky ? "sticky z-50" : " static"
			} backdrop-blur-lg bg-transparent pt-5 md:pt-10 top-0 text-white w-full transition-all duration-300 ease-linear`}
		>
			<div
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
						<Link to="/">
							<img className="w-[150px]" src={logo} />
						</Link>
						<button
							onClick={() => setOpenMenu((prev) => !prev)}
							className="md:hidden"
						>
							<MenuBar />
						</button>
					</div>
					{/* Mobile Nav */}
					<motion.nav
						initial={{ height: 0 }}
						animate={{ height: openMenu ? 250 : 0 }}
						className={`overflow-hidden md:px-0 bg-light-blue`}
					>
						<ul className="md:hidden border-t-4 px-2 md:border-b-0 border-black font-chivo py-5 lg:py-0 text-black flex flex-col gap-8">
							<li>
								<Link to="#speakers">SPEAKERS</Link>
							</li>
							<li>
								<Link to="#sponsors">SPONSORS</Link>
							</li>
							<li>
								<NavLink className="link" to="/contact">
									CONTACT
								</NavLink>
							</li>
							<li className="cursor-pointer max-w-[170px]">
								<Button aria-label="ticket button" color="black">
									GET TICKETS
								</Button>
							</li>
						</ul>
					</motion.nav>
					<nav>
						<ul className="hidden md:flex px-2 md:border-b-0 border-black font-chivo py-5 lg:py-0 text-black  items-center flex-row gap-8">
							<li>
								<Link to="/#speakers">SPEAKERS</Link>
							</li>
							<li>
								<Link to="/#sponsors">SPONSORS</Link>
							</li>
							<li>
								<NavLink className="link" to="/contact">
									CONTACT
								</NavLink>
							</li>
							<li className="cursor-pointer">
								<Button aria-label="ticket button" color="black">
									GET TICKETS
								</Button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}