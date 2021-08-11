import React from "react";
import "./reminder-wrapper.scss";

const ReminderWrapper = ({ children }) => {
	return (
		<main className="page-wrap">{children}</main>
	);
};

export default ReminderWrapper;