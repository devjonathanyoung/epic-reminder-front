import ReminderListPage from "./pages/reminder-list-page/reminder-list-page";
import ReminderCard from "./component/reminder-card/reminder-card";
import OneReminderPage from "./pages/one-reminder-page/one-reminder-page";
import FormCreateReminder from "./pages/create-reminder-page/create-reminder-page";
import FormUpdateReminder from "./pages/update-reminder-page/update-reminder-page";
import SignInPage from "./pages/sign-in-page/sign-in-page";
import i18next from "../../config/i18next";
import i18nReminder from "../reminder/i18n/fr.json";

i18next.addResourceBundle("fr", "reminder", i18nReminder);

export {
	ReminderListPage,
	OneReminderPage,
	FormCreateReminder,
	FormUpdateReminder,
	ReminderCard,
	SignInPage
};
