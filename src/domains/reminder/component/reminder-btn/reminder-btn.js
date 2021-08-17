import React from "react";
import "./reminder-btn.scss";

const ReminderBtn = (props) => {
	const { className, children,  onClick, dark, disabled } = props;
	return (
		<button
			className={`reminder-btn ${className} ${dark ? "dark": ""}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
};

export default ReminderBtn;
