import { ChangeEvent, FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import s from '../app-header.module.css';

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <select
      className={s.select}
      name="select"
      value={i18n.language}
      onChange={handleLanguageChange}
    >
      <option value="ru">Русский</option>
      <option value="en">Английский</option>
    </select>
  );
};
