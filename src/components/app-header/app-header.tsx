import { ChangeEvent, FC } from "react";
import s from "./app-header.module.css";
import { useTheme } from "@hooks/useTheme";
import { Theme } from "@providers/theme/types";

export const AppHeader: FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Theme;
    console.log(value);
    setTheme(value);
  };

  return (
    <header className={s.header}>
      <div className={s.settings}>
        <select
          className={s.select}
          name="select"
          value={theme}
          onChange={handleChange}
        >
          <option value="light">Светлая</option>
          <option value="dark">Тёмная</option>
          <option value="system">Системная</option>
        </select>
      </div>
    </header>
  );
};
