import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import i18nfr from "./i18n-fr.json";

i18n.use(initReactI18next)
	.init({
		resources: {
			fr: {
				translation: i18nfr
			}
		},
		lng: "fr",
		interpolation: {
			escapeValue: false
		},
		react: {
			transSupportBasicHtmlNodes: true,
			transKeepBasicHtmlNodesFor: ["br", "strong", "i", "ul", "li", "p", "s"]
		}
	})
	.then();

export default i18n;
