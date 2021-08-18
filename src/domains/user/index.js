import SignInPage from "../user/pages/sign-in-page/sign-in-page";
import i18next from "../../config/i18next";
import i18nUser from "../user/i18n/fr.json";

i18next.addResourceBundle("fr", "user", i18nUser);

export {
	SignInPage
};
