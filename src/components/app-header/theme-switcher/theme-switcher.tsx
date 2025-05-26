import { useTheme } from "@hooks/useTheme";
import { Theme } from "@providers/theme/types";
import { ChangeEvent, FC } from "react";
import s from "../app-header.module.css";
import { useTranslation } from 'react-i18next';

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Theme;
    setTheme(value);
  };

  return (
    <select
      className={s.select}
      name="select"
      value={theme}
      onChange={handleChange}
    >
      <optgroup label={t("theme-switcher.label-group")}>
        <option value="light">{t("theme-switcher.light")}</option>
        <option value="dark">{t("theme-switcher.dark")}</option>
        <option value="system">{t("theme-switcher.system")}</option>
      </optgroup>
    </select>
  );
};
