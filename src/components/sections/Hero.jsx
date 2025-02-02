import { useRef } from "react";
import Button from "../Button";
import img from "../../assets/dev.png";
import { motion } from "framer-motion";

const text =
	"Join us for an immersive tech experience where leading senior developers, CEOs, and CTOs connect with developers to discuss the latest tech stacks, frameworks, programming languages, and job trends.";

export default function Hero() {
	const heroRef = useRef(null);

	return (
		<section
			ref={heroRef}
			id="hero"
			className={`bg-blac text-white pt-[180px] pb-20  bg-hero bg-center bg-cover`}
		>
			<div className="max-w-[800px] space-y-10 mx-auto">
				<div className="space-y-4 lg:space-y-7">
					<motion.h1
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="leading-10 font-jersey text-[2.7rem] px-2 lg:text-8xl text-center"
					>
						TechStack;{" "}
						<span
							style={{
								background: `url(${img}) no-repeat`,
								backgroundPosition: "center",
								backgroundSize: "contain",
							}}
							className={`p-2 text-light-blue duration-1000 ease-linear transition-opacity`}
						>
							Devs2Devs
						</span>{" "}
						<br /> IBADAN 2024
					</motion.h1>
					<motion.div
						initial={{ opacity: 0.5, width: 0 }}
						animate={{ opacity: 1, width: "160px" }}
						transition={{
							delay: 0.05,
							duration: 0.3,
						}}
						className="border-t-2 border-dashed border-white mx-auto"
					/>
					<motion.p
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.5 }}
						className="font-cousine font-[300] text-center text-xs md:text-[1.35rem] px-2"
					>
						{text.split(" ").map((word, wordIndex) => (
							<span
								key={wordIndex}
								className="inline-block leading-5 lg:leading-7"
							>
								{word.split("").map((char, charIndex) => (
									<motion.span
										key={charIndex}
										initial={{ opacity: 0.5 }}
										animate={{ opacity: 1 }}
										transition={{
											delay: (wordIndex * 10 + charIndex) * 0.04,
										}}
										className="inline-block"
									>
										{char}
									</motion.span>
								))}
								&nbsp;
							</span>
						))}
					</motion.p>
				</div>

				<div className="flex justify-center gap-5 lg:gap-10">
					<motion.div
						initial={{ opacity: 0, x: -10, y: 5 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Button className="text-white " color="bordered">
							GET TICKET
						</Button>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 10, y: -5 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Button className="text-black " color="lightblue">
							BECOME A SPONSOR
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
