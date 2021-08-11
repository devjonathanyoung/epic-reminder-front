import React from "react";
import "./reminder-content.scss";

export const ReminderContent = ({ children }) => {
	return (
		<div className="main-content">{children}</div>
	);
};

export default ReminderContent;