import SignInPage from "../user/pages/sign-in-page/sign-in-page";
import i18next from "../../config/i18next";
import i18nUser from "../user/i18n/fr.json";
import { AuthProvider } from "./auth/auth-context.js";

i18next.addResourceBundle("fr", "user", i18nUser);

export {
	SignInPage,
	AuthProvider
};
