import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import menuIcon from "../assets/menu.svg";

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);
	const [containerHeight, setContainerHeight] = useState(57);
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef.current) {
			setContainerHeight(containerRef.current.getBoundingClientRect().height);
		}
	}, [containerRef, openMenu]);

	return (
		<header className="sticky bg-transparent pt-5 md:pt-10 top-0 text-white w-full">
			<div
				ref={containerRef}
				className={`relative bg-light-blue max-w-[95%] h-[${containerHeight}] transition-all duration-300 ease-linear md:max-w-[90%] mx-auto`}
			>
				<div className="mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between md:gap-5 md:px-10">
					<div className="py-1 px-2 md:px-0 md:py-0 flex justify-between items-center">
						<img className="w-[150px]" src={logo} />
						<button
							onClick={() => setOpenMenu((prev) => !prev)}
							className="md:hidden"
						>
							<img src={menuIcon} alt="" />
						</button>
					</div>
					<nav
						className={`px-2 md:px-0 ${
							openMenu ? "h-full pt-5 md:pt-0" : "h-0 md:h-full overflow-hidden"
						}`}
					>
						<ul className="font-chivo text-black flex flex-col md:items-center md:flex-row gap-8">
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
								<Button boxclass="bg-light-blue" aria-label="ticket button">
									GET TICKETS
								</Button>
							</li>
						</ul>
					</nav>
				</div>
				<span className="absolute bg-black h-3 w-3 left-0 top-3"></span>
				<span className="absolute bg-black h-3 w-3 top-0 left-3"></span>
				<span className="absolute bg-black h-3 w-3 bottom-3 right-0"></span>
				<span className="absolute bg-black h-3 w-3 right-3 bottom-0"></span>
			</div>
		</header>
	);
}
