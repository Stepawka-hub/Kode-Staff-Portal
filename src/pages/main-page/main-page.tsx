import { Search } from "@components/search";
import { Tabs } from "@components/tabs";
import { FC } from "react";
import s from "./main-page.module.css";

export const MainPage: FC = () => (
  <section>
    <h1 className={s.title}>Поиск</h1>
    <Search />
    <Tabs />
  </section>
);
