import React from "react";

function Button({ children, ...props }) {
	return (
		<div
			className={`group cursor-pointer relative bg-transparent text-sm text-center text-white ${props.className}`}
		>
			<div className="bg-black px-7 py-2 w-full h-full group-hover:rounded-3xl transition-all duration-300 ease-linear">
				<button
					className={`${props.className} border-none bg-transparent`}
					{...props}
				>
					{children}
				</button>
			</div>
			<div className="group-hover:invisible transition-all duration-150 ease-linear">
				<span
					className={`absolute ${props.boxclass} h-2 w-2 left-0 top-2`}
				></span>
				<span
					className={`absolute ${props.boxclass} h-2 w-2 left-2 top-0`}
				></span>
				<span
					className={`absolute ${props.boxclass} h-1.5 w-1.5 left-0 bottom-0`}
				></span>
				<span
					className={`absolute ${props.boxclass} h-1.5 w-1.5 right-0 top-0`}
				></span>
				<span
					className={`absolute ${props.boxclass} h-2 w-2 right-0 bottom-0`}
				></span>
			</div>
		</div>
	);
}

export default Button;
