import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { speakers } from "../data";
import Button from "./Button";

function Speakers() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef);
	const [currentIndex, setCurrentIndex] = useState(0);

	// console.log(isInView);
	const handleScroll = () => {
		const container = sectionRef.current;
		if (!container) return;

		const children = container.children;

		let closestIndex = 0;
		let closestOffset = Infinity;

		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			const offset = Math.abs(
				child.getBoundingClientRect().left -
					container.getBoundingClientRect().left
			);

			if (offset < closestOffset) {
				closestOffset = offset;
				closestIndex = i;
			}

			setCurrentIndex(closestIndex);
		}
	};

	// console.log(currentIndex);

	return (
		<section id="speakers" className="bg-light-grey">
			<div className="py-16 mx-auto max-w-[95%] lg:max-w-[90%] flex flex-col gap-10">
				<div className="text-center font-cousine max-w-md mx-auto">
					<span className="text-blue uppercase lg:text-lg mb-1 block">
						Our Speakers
					</span>
					<h3 className="text-lg lg:text-2xl">
						Meet our lineup of experts who will be sharing their insights
					</h3>
				</div>
				<div>
					<div
						ref={sectionRef}
						onScroll={handleScroll}
						className="snap-x overflow-auto no-scrollbar gap-5 flex flex-nowrap lg:grid lg:grid-cols-4 px-3 lg:px-0"
					>
						{speakers.map((speaker, index) => (
							<div
								className="snap-center min-h-[430px] lg:min-h-[330px] pb-8 lg:py-5 px-4 relative flex flex-col min-w-full md:min-w-44"
								key={index}
								style={{
									background: `url(${speaker.image}) no-repeat center`,
									backgroundSize: "100% 100%",
								}}
							>
								<div className="mt-auto text-white z-10 relative p-2">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: isInView ? 33 : 0 }}
										transition={{ delay: 1, duration: 0.15 }}
										className="absolute top-0 left-0 h-full bg-blue"
									/>

									<div className="font-cousine">
										<h5 className="text-nowrap font-semibold relative text-xl z-10">
											{speaker.name}
										</h5>
										<p className="text-nowrap font-normal relative text-sm z-10">
											{speaker.role}
										</p>
									</div>
								</div>
								<div
									style={{
										backgroundSize: "100% 100%",
									}}
									className="absolute bg-cover bg-no-repeat top-0 left-0 right-0 bottom-0 bg-speakerlayer"
								></div>
							</div>
						))}
					</div>
					<div className="flex relative z-10 justify-center gap-2 -mt-7 md:hidden">
						{speakers.map((_, index) => (
							<div
								key={index}
								className={`w-3 h-3 rounded-full ${
									index === currentIndex ? "bg-blue" : "bg-grey"
								}`}
							/>
						))}
					</div>
				</div>
				<div className="max-w-[220px] mx-auto">
					<Button
						className="font-semibold"
						boxclass="bg-light-grey"
						btnwrapperclass="bg-blue"
					>
						RESERVE YOUR SPORT!
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Speakers;
