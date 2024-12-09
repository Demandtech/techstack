import React from "react";

function Button({ ...props }) {
	return (
		<div
			className={`group cursor-pointer relative bg-transparent text-sm text-center text-white ${props.className}`}
		>
			<div
				style={{
					backgroundSize: "100% 100%",
				}}
				className={`${
					props.color === "black"
						? "bg-blackbtn"
						: props.color === "bordered"
						? "bg-borderedbtn"
						: props.color === "lightblue"
						? "bg-lightbluebtn"
						: "bg-bluebtn"
				}  font-semibold bg-no-repeat px-5 md:px-7 py-2 w-full h-full group-hover:rounded-3xl transition-all duration-300 ease-linear`}
			>
				<button
					className={`${props.className} border-none bg-transparent text-sm md:text-base text-nowrap`}
					{...props}
				>
					{props.children}
				</button>
			</div>
			{/* <div className="group-hover:invisible transition-all duration-150 ease-linear">
				<span
					className={`absolute ${props.boxclass} h-2 w-2 left-0 top-2 border-l-0`}
				></span>
				<span
					className={`absolute ${props.boxclass} h-2 w-2 left-2 top-0 border-t-0`}
				></span>
				<span
					className={`absolute ${props.boxclass} h-1.5 w-1.5 left-0 border-l-0 border-b-0 bottom-0`}
				></span>
				<span
					className={`absolute ${props.boxclass} h-1.5 w-1.5 right-0 border-r-0 border-t-0 top-0`}
				></span>
				<span
					className={`absolute ${props.boxclass} h-2 w-2 right-0 border-r-0 bottom-0 border-b-0`}
				></span>
			</div> */}
		</div>
	);
}

export default Button;
