import React, { useEffect, useState } from "react";

function PageLoader() {
	const [dots, setDots] = useState("");

	useEffect(() => {
		let i = 0;

		const interval = setInterval(() => {
			if (i < 3) {
				setDots((prev) => prev + ".");
				i++;
			} else {
				setDots("");
				i = 0;
			}
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex items-center text-center justify-center h-screen w-screen text-light-grey">
			<span>Loading</span>
			<div className="w-5 text-start">
				<span>{dots}</span>
			</div>
		</div>
	);
}

export default PageLoader;
