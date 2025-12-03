import { createI18n } from "vue-i18n";
import en from "@/translates/en/main.json";
import ru from "@/translates/ru/main.json";

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  fallbackLocale: "en",
  messages: {
    en: en,
    ru: ru,
  },
});

export default i18n;
