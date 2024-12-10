import { motion, useInView } from "framer-motion";
import { tickets } from "../../data";
import Button from "../Button";
import { NairaIcon } from "../Svgs";
import { useRef } from "react";

export default function Ticket() {
	const wrapperRef = useRef(null);

	const wrapperInView = useInView(wrapperRef);

	return (
		<section ref={wrapperRef} id="tickets">
			<div className="py-16 max-w-[95%] lg:max-w-[90%] mx-auto">
				<div className="text-white lg:max-w-[50%] font-cousine px-3 lg:px-0">
					<motion.h3
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: wrapperInView && 0, opacity: wrapperInView && 1 }}
						transition={{ duration: 0.3 }}
						className="text-2xl lg:text-4xl mb-2"
					>
						GET TICKETS
					</motion.h3>
					<motion.p
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: wrapperInView && 0, opacity: wrapperInView && 1 }}
						transition={{ duration: 0.3 }}
						className="text-sm md:text-base leading-6"
					>
						Secure Your Spot at TechStack; Devs2Devs for a day of insights,
						networking, and hands-on sessions.
					</motion.p>
				</div>
				<div className="flex flex-col lg:flex-row mt-12 gap-10 px-3 lg:px-0">
					{tickets.map((ticket) => (
						<div
							className={`relative text-white flex-1 font-cousine py-12 w-full ${
								ticket.slug === "v-vip"
									? "bg-vvip"
									: ticket.slug == "vip"
									? "bg-vip"
									: "bg-basic"
							} transition-all duration-300 ease-linear bg-no-repeat`}
							key={ticket.slug}
							style={{
								backgroundSize: "100% 100%",
							}}
						>
							<div
								className={`text-center min-h-[430px] h-full flex flex-col gap-10 ${
									ticket.slug !== "v-vip" ? "text-black" : "text-white"
								}`}
							>
								<div className="flex flex-col items-center">
									<h5 className="text-2xl mb-2">{ticket.name}</h5>
									<p className="text-3xl flex items-center">
										<NairaIcon
											color={ticket.slug !== "v-vip" ? "#212121" : "white"}
											className="mb-1"
										/>{" "}
										<span>{ticket.price}</span>
									</p>
								</div>
								<ul className="text-start px-6 font-cousine flex flex-col gap-4 mb-10">
									{ticket.attractions.map((att, index) => (
										<motion.li
											initial={{ x: -30 + index * 10, opacity: 0 }}
											animate={{
												x: wrapperInView && 0,
												opacity: wrapperInView && 1,
											}}
											transition={{
												delay: 0.03 * index,
												duration: 0.3 * index,
											}}
											key={att}
											className="flex gap-2"
										>
											<div className="pt-1">
												<span
													className={`w-4 h-2  block  ${
														ticket.slug !== "v-vip" ? "bg-black" : "bg-white"
													}`}
												></span>
												<span
													className={`w-2 h-1 bg-black block ${
														ticket.slug !== "v-vip" ? "bg-black" : "bg-white"
													}`}
												></span>
											</div>
											<div>
												<p className="text-sm tracking-wider">{att}</p>
											</div>
										</motion.li>
									))}
								</ul>
								<motion.div
									initial={{ y: 30, opacity: 0 }}
									animate={{
										y: wrapperInView && 0,
										opacity: wrapperInView && 1,
									}}
									transition={{ duration: 0.3 }}
									className="mt-auto mx-auto"
								>
									<Button
										btnwrapperclass={`${
											ticket.slug === "v-vip"
												? "bg-white text-black"
												: "bg-black"
										}`}
										className="font-semibold"
										color={`${ticket.slug !== "v-vip" ? "blue" : "black"}`}
									>
										GET TICKETS
									</Button>
								</motion.div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
