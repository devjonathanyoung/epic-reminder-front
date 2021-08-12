import React from "react";
import "./reminder-btn.scss";

const ReminderBtn = (props) => {
	const { className, children,  handleDeleteClick } = props;
	return (
		<button className={`reminder-btn ${className}`} onClick={handleDeleteClick}>{children}</button>
	);
};

export default ReminderBtn;
