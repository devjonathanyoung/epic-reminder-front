import React from "react";
import iconRef from "../../../../img/sprite.svg";
import "./icon.scss";

const Icon = (props) => {
	const { name = "", className = "", onClick } = props;

	return (
		<span onClick={onClick} className={`icon ${className}`}>
			<svg role="img" aria-hidden="true" focusable="false">
				<use xlinkHref={`${iconRef}#${name}`} />
			</svg>
		</span>
	);
};

export default Icon;