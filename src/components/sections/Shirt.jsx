import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Button from "../Button";

import { shirts } from "../../data";
import { ChevronLeft, ChevronRight, Dashed } from "../Svgs";

function Shirt() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % shirts.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + shirts.length) % shirts.length);
	};


	return (
		<section
			ref={sectionRef}
			id="shirts"
			className="py-16 bg-light-teal relative overflow-hidden"
		>
			<div className="max-w-[90%] mx-auto flex gap-10 justify-between flex-col lg:flex-row">
				{/* Left Section */}
				<div className="lg:pt-10">
					<div className="font-cousine mb-7 lg:mb-7 text-2xl lg:text-4xl">
						<motion.h3
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.01, duration: 0.3 }}
						>
							Get Your Own
						</motion.h3>
						<motion.h3
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.02, duration: 0.4 }}
						>
							Official TechStack;
						</motion.h3>
						<motion.h3
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.03, duration: 0.4 }}
						>
							Devs2Devs shirt
						</motion.h3>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
						transition={{ delay: 0.04, duration: 0.3 }}
						className="max-w-[180px]"
					>
						<Button btnwrapperclass="bg-blue" boxclass="bg-light-teal">
							PAY FOR T-SHIRT
						</Button>
					</motion.div>
				</div>

				{/* Right Section */}
				<div className="w-full lg:w-1/2 overflow-hidden p-4 relative">
					<div
						style={{ backgroundSize: "100% 100%" }}
						className="bg-shirtwhitebg"
					>
						<motion.div
							className="relative flex"
							initial={{
								opacity: 0,
								transform: `translateX(-${currentIndex * 100}%)`,
							}}
							animate={{
								opacity: 1,
								transform: `translateX(-${currentIndex * 100}%)`,
							}}
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
						>
							{shirts.map((shirt, index) => (
								<motion.div
									key={index}
									className={`min-w-full bg-shirtwhitebg h-[430px] lg:h-[550px] translate-x-4 translate-y-4 ${
										index !== currentIndex ? "invisible" : "visible"
									}`}
									style={{
										background: `url(${shirt}) no-repeat center`,
										backgroundSize: "100% 100%",
									}}
								/>
							))}
						</motion.div>
					</div>

					<div className="absolute left-1/2 -translate-x-1/2 bottom-10 lg:bottom-20 flex items-center">
						<button
							onClick={handlePrev}
							aria-label="Previous button"
							type="button"
							className="bg-blue p-3 rounded-sm active:opacity-50"
						>
							<ChevronLeft />
						</button>
						<Dashed width="40" />
						<button
							aria-label="Next button"
							type="button"
							className="bg-blue p-3 rounded-sm active:opacity-50"
							onClick={handleNext}
						>
							<ChevronRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Shirt;
