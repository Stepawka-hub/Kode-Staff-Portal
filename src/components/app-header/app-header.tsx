import { FC } from "react";
import s from "./app-header.module.css";
import { useTheme } from "@hooks/useTheme";

export const AppHeader: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleThemeLight = () => {
    setTheme("light");
  };

  const toggleThemeDark = () => {
    setTheme("dark");
  };

  return (
    <header className={s.header}>
      App Header
      <span>{theme}</span>
      <button onClick={theme === "light" ? toggleThemeDark : toggleThemeLight}>
        Сменить тему
      </button>
    </header>
  );
};
