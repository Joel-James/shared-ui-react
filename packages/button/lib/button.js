import React from "react";

const Button = ({ label, icon, design = "solid", color, ...props }) => {
	const loader = (
		<span
			className="sui-icon-loader sui-loading"
			style={{ position: "relative" }}
			aria-hidden="true"
		/>
	);

	let content = (
		<React.Fragment>
			{icon && "" !== icon && (
				<span className={"sui-icon-" + icon} aria-hidden="true" />
			)}
			{label}
		</React.Fragment>
	);

	let className = "sui-button";

	// Set button color.
	switch (color) {
		case "blue":
		case "green":
		case "red":
		case "orange":
		case "purple":
		case "yellow":
		case "white":
			className += " sui-button-" + color;
			break;

		case "gray":
		default:
			className += "";
			break;
	}

	// Set button style.
	switch (design) {
		case "ghost":
		case "outlined":
			className += " sui-button-" + design;
			break;

		case "solid":
		default:
			className += "";
			break;
	}

	// Set loading class.
	if (props.loading) {
		className += " sui-button-onload";
	}

	if (props.href) {
		return (
			<a
				className={className}
				disabled={props.disabled || props.loading}
				{...props}>
				{props.loading ? loader : content}
			</a>
		);
	}

	return (
		<button
			className={className}
			disabled={props.disabled || props.loading}
			{...props}>
			{props.loading ? loader : content}
		</button>
	);
};

export { Button };
