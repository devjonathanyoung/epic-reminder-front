import React from "react";
import iconRef from "../../../../img/sprite.svg";
import "./icon.scss";

const Icon = (props) => {
	const { name = "", className = "" } = props;

	return (
		<span className={`icon ${className}`}>
			<svg role="img" aria-hidden="true" focusable="false">
				<use xlinkHref={`${iconRef}#${name}`} />
			</svg>
		</span>
	);
};

export default Icon;