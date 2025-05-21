import { Search } from "@components/search";
import { Tabs } from "@components/tabs";
import { FC } from "react";
import s from './top-app-bar.module.css';

export const TopAppBar: FC = () => (
  <header className={s.header}>
    <h1 className={s.title}>Поиск</h1>
    <Search />
    <Tabs />
  </header>
);
