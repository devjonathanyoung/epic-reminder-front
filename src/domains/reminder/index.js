import Header from "./header/header";
import ReminderListPage from "./pages/reminder-list-page/reminder-list-page";
import ReminderCard from "./pages/reminder-list-page/reminder-card";
import OneReminderPage from "./pages/one-reminder-page/one-reminder-page";
import FormCreateReminder from "./pages/forms/form-create-reminder";
import FormUpdateReminder from "./pages/forms/form-update-reminder";
import i18next from "../../config/i18next";
import i18nReminder from "./i18n/fr.json";

i18next.addResourceBundle("fr", "reminder", i18nReminder);


export {
	Header, 
	ReminderListPage,
	OneReminderPage,
	FormCreateReminder,
	FormUpdateReminder,
	ReminderCard
};
