import { useTheme } from '@hooks/useTheme';
import { Theme } from '@providers/theme/types';
import { ChangeEvent, FC } from "react";
import s from '../app-header.module.css';

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Theme;
    setTheme(value);
  };

  return <select
    className={s.select}
    name="select"
    value={theme}
    onChange={handleChange}
  >
    <option value="light">Светлая</option>
    <option value="dark">Тёмная</option>
    <option value="system">Системная</option>
  </select>;
};
