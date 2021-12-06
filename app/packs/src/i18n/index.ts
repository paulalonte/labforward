import i18next from "i18next";

import de from './languages/de.json';
import en from './languages/en.json';

export const i18nInit = (lng: string) => {
    return i18next.init({
        lng,
        fallbackLng: 'en',
        resources: {
            en,
            de
        }
    })
}