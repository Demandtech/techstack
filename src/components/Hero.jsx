import { useRef } from "react";
import Button from "./Button";
import img from "../assets/dev.png";
import { motion } from "framer-motion";

const text =
	"Join us for an immersive tech experience where leading senior developers, CEOs, and CTOs connect with developers to discuss the latest tech stacks, frameworks, programming languages, and job trends.";

export default function Hero() {
	const heroRef = useRef(null);

	return (
		<section
			ref={heroRef}
			id="hero"
			className={`bg-black text-white py-10 lg:py-20`}
		>
			<div className="max-w-[800px] space-y-10 mx-auto">
				<div className="space-y-7">
					<motion.h1
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="font-jersey text-[2.5rem] px-2 lg:text-8xl text-center"
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
						}}
						className="border-t-2 border-dashed border-white mx-auto"
					/>
					<p className="leading-7 font-cousine font-[300] text-center text-xs sm:text-sm md:text-[1.35rem] px-2">
						{text.split(" ").map((word, wordIndex) => (
							<span key={wordIndex} className="inline-block leading-7">
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
					</p>
				</div>

				<div className="flex justify-center gap-5 lg:gap-10">
					<Button className="text-white " color="bordered">
						GET TICKET
					</Button>
					<Button className="text-black " color="lightblue">
						BECOME A SPONSOR
					</Button>
				</div>
			</div>
		</section>
	);
}
