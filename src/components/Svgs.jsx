export function NairaIcon(props) {
	return (
		<svg
			width="20"
			height="22"
			viewBox="0 0 20 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0.333344 7.33333H2.77779V0H5.22223L9.40223 7.33333H15V0H17.4445V7.33333H19.8889V9.77778H17.4445V12.2222H19.8889V14.6667H17.4445V22H15L10.8078 14.6667H5.22223V22H2.77779V14.6667H0.333344V12.2222H2.77779V9.77778H0.333344V7.33333ZM5.22223 7.33333H6.60334L5.22223 4.92556V7.33333ZM5.22223 9.77778V12.2222H9.40223L8.0089 9.77778H5.22223ZM15 17.1111V14.6667H13.5945L15 17.1111ZM10.7956 9.77778L12.2011 12.2222H15V9.77778H10.7956Z"
				fill={props.color}
			/>
		</svg>
	);
}

export function MenuBar(props) {
	return (
		<svg
			width="28"
			height="25"
			viewBox="0 0 28 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M20 21.5V24.5H3.5V21.5H20ZM27.5 11V14H0.5V11H27.5ZM24.5 0.5V3.5H8V0.5H24.5Z"
				fill="black"
			/>
		</svg>
	);
}

export function ChevronRight(props) {
	return (
		<svg
			width="11"
			height="19"
			viewBox="0 0 11 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0.0795383 2.33419L1.69772 0.725098L10.6886 9.7251L1.68863 18.7251L0.0795383 17.116L7.47045 9.7251L0.0795383 2.33419Z"
				fill="white"
			/>
		</svg>
	);
}

export function ChevronLeft(props) {
	return (
		<svg
			width="11"
			height="19"
			viewBox="0 0 11 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10.9201 2.33419L9.30191 0.725098L0.311005 9.7251L9.311 18.7251L10.9201 17.116L3.52919 9.7251L10.9201 2.33419Z"
				fill="white"
			/>
		</svg>
	);
}

export function Dashed(props) {
	return (
		<svg
			width="20"
			height="4"
			viewBox="0 0 20 4"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<line
				x1="0.192963"
				y1="2.29102"
				x2="19.1994"
				y2="2.29102"
				stroke="#B5B4EE"
				strokeWidth="3"
			/>
		</svg>
	);
}
