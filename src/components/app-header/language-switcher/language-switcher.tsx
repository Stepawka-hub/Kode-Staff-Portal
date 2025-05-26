import { ChangeEvent, FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import s from "../app-header.module.css";

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <select
      className={s.select}
      name="select"
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      <optgroup label={t("language-switcher.label-group")}>
        <option value="ru">{t("language-switcher.ru")}</option>
        <option value="en">{t("language-switcher.en")}</option>
      </optgroup>
    </select>
  );
};
