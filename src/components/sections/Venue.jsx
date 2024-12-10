import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "../Button";
import arrowDown from "../../assets/arrow-down.svg";

const subheader =
	"1234 Tech Avenue, Suite 500, Innovation District, Silicon Valley, CA94043, Nigeria.";

function Venue() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.2,
				duration: 0.7,
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section
			ref={sectionRef}
			id="venue"
			className="text-black bg-light-blue py-10"
		>
			<motion.div className="flex flex-col justify-between lg:flex-row max-w-[85%] lg:max-w-[90%] mx-auto">
				<motion.div className="lg:pt-10 flex flex-col" variants={textVariants}>
					<motion.h2
						initial="hidden"
						variants={containerVariants}
						animate={isInView ? "visible" : "hidden"}
						className="font-cousine text-4xl md:text-6xl mb-5 lg:mb-10"
					>
						Join Us On <br /> Oct 20th, 2024
					</motion.h2>
					<div className="max-w-[150px] hidden lg:block">
						<Button boxclass="bg-light-blue" btnwrapperclass="bg-blue">
							GET TICKETS
						</Button>
					</div>
				</motion.div>

				<motion.div
					className="lg:w-1/3 lg:ml-auto flex flex-col lg:py-7 gap-5 lg:gap-10 items-start"
					variants={textVariants}
					animate={isInView ? "visible" : "hidden"}
				>
					<div className="lg:pl-10 h-full max-h-10 lg:max-h-24">
						<motion.img
							initial={{ height: 0 }}
							animate={{ height: isInView ? 96 : 0 }}
							transition={{ duration: 0.7 }}
							src={arrowDown}
							alt="arrow down"
							className="max-h-10  lg:max-h-24"
						/>
					</div>
					<motion.p
						initial="hidden"
						variants={containerVariants}
						animate={isInView ? "visible" : "hidden"}
						className="text-lg font-cousine"
					>
						{subheader.split(" ").map((word, wordIndex) => (
							<span key={wordIndex} className="inline-block">
								{word.split("").map((char, charIndex) => (
									<motion.span
										key={charIndex}
										initial={{ opacity: 0.5 }}
										animate={{ opacity: isInView ? 1 : 0.5 }}
										transition={{
											delay: (wordIndex * 10 + charIndex) * 0.08,
											duration: 0.7,
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
					<div className="max-w-[150px] lg:hidden">
						<Button boxclass="bg-light-blue" btnwrapperclass="bg-blue">
							GET TICKETS
						</Button>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default Venue;
