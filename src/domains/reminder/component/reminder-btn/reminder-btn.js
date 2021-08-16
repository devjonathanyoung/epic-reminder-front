import React from "react";
import "./reminder-btn.scss";

const ReminderBtn = (props) => {
	const { className, children,  onClick } = props;
	return (
		<button className={`reminder-btn ${className}`} onClick={onClick}>{children}</button>
	);
};

export default ReminderBtn;
