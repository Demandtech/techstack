import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Button from "../Button";

import { shirts } from "../../data";
import { ChevronLeft, ChevronRight, Dashed } from "../Svgs";

function Shirt() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false });

	const handleNext = () => {
		setCurrentIndex((prev) => {
			return prev < shirts.length - 1 ? prev + 1 : 0;
		});
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => {
			return prev > 0 ? prev - 1 : shirts.length - 1;
		});
	};

	return (
		<section
			ref={sectionRef}
			id="shirts"
			className="py-16 bg-light-teal relative overflow-hidden"
		>
			<div className="max-w-[90%] mx-auto flex gap-10 justify-between flex-col lg:flex-row">
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
							0fficial TechStack;
						</motion.h3>{" "}
						<motion.h3
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.03, duration: 0.4 }}
						>
							{" "}
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
				<div className="w-full overflow-hidden lg:w-1/2 relative">
					<div
						style={{ backgroundSize: "100% 100%" }}
						className="w-full bg-shirtwhitebg min-h-[430px] lg:min-h-[550px]"
					>
						{shirts.map((shirt, index) => (
							<div
								style={{
									background: `url(${shirt}) no-repeat center`,
									backgroundSize: "100% 100%",
									transform: `translateX(${100 * (index - currentIndex)}%)`,
								}}
								className="absolute left-0 top-0 w-full h-full transition-transform duration-300 ease-in-out"
								key={index}
							></div>
						))}
					</div>
					<div className="absolute left-1/2 -translate-x-1/2 bottom-10 lg:bottom-20 flex items-center">
						<div>
							<button
								onClick={handlePrev}
								aria-label="Previous button"
								type="button"
								className="bg-blue p-3 rounded-sm active:opacity-50"
							>
								<ChevronLeft />
							</button>
						</div>

						<Dashed width="40" />

						<div>
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
			</div>
		</section>
	);
}

export default Shirt;
