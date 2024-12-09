import Button from "./Button";

import { shirts } from "../data";
import { ChevronLeft, ChevronRight, Dashed } from "./Svgs";
import { useState } from "react";

function Shirt() {
	const [currentIndex, setCurrentIndex] = useState(0);

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
			id="shirts"
			className="py-12 bg-light-teal relative overflow-hidden"
		>
			<div className="max-w-[90%] mx-auto flex gap-7 justify-between flex-col lg:flex-row">
				<div className="lg:pt-10">
					<h3 className="font-cousine mb-3 lg:mb-7 text-2xl lg:text-4xl">
						Get Your Own <br /> 0fficial TechStack; <br /> Devs2Devs shirt
					</h3>
					<div className="max-w-[180px]">
						<Button btnwrapperclass="bg-blue" boxclass="bg-light-teal">
							PAY FOR T-SHIRT
						</Button>
					</div>
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
