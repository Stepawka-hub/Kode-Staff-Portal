import { FC } from "react";
import s from "./main-page.module.css";
import { TopAppBar } from "@components/top-app-bar";
import { StaffList } from "@components/staff-list";

export const MainPage: FC = () => (
  <section>
    <h1 className={s.title}>Поиск</h1>
    <TopAppBar />
    <StaffList />
  </section>
);
