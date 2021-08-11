import React from "react";
import "./reminder-btn.scss";

const ReminderBtn = ({ children, handleDeleteClick }) => {
	return (
		<button onClick={handleDeleteClick} className="reminder-btn">{children}</button>
	);
};

export default ReminderBtn;
