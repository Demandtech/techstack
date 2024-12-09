import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { why } from "../data";

function WhyAttend() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true });
	return (
		<section ref={sectionRef} id="why" className="bg-light-teal">
			<div className="py-16">
				<motion.h3
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
					transition={{
						// delay: 0.04,
						duration: 0.3,
					}}
					className="text-center pb-2 font-cousine text-4xl lg:text-6xl"
				>
					Why Attend
				</motion.h3>
				<motion.div
					initial={{ width: 0, opacity: 0 }}
					animate={{ opacity: isInView ? 1 : 0, width: isInView ? 190 : 0 }}
					transition={{
						delay: 0.04,
					}}
					className="border-t-[3px] border-dashed max-w-32 md:max-w-48 border-black mx-auto"
				/>
				<div className="max-w-[90%] md:max-w-[85%] mx-auto grid lg:grid-cols-2 lg:gap-x-20 gap-y-5 mt-12 [&>*:nth-child(even)]:lg:pt-24">
					{why.map((y, index) => (
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{
								opacity: isInView ? 1 : 0,
								y: isInView ? 0 : 50,
							}}
							transition={{
								duration: 0.5,
								delay: index * 0.2,
							}}
							className={`flex gap-2  lg:last-of-type:pt-20`}
							key={y.number}
						>
							<div className="text-blue font-cousine text-3xl lg:text-4xl font-semibold">
								{y.number}
							</div>
							<div className={`max-w-[350px] font-cousine`}>
								<h5 className="text-lg lg:text-xl font-semibold mb-1">
									{y.title}
								</h5>
								<p className="text-sm lg:text-lg font-normal">
									{y.text.split(" ").map((word, wordIndex) => (
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
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default WhyAttend;
