import React from "react";
import "./reminder-btn.scss";

const ReminderBtn = ({ children }) => {
	return (
		<button className="reminder-btn">{children}</button>
	);
};

export default ReminderBtn;
