import { FC } from "react";
import s from "./app-header.module.css";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";

export const AppHeader: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.settings}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
