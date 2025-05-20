import { FC } from "react";
import s from "./main-page.module.css";
import { TopAppBar } from "@components/top-app-bar";
import { StaffList } from "@components/staff-list";
import { Separator } from "@components/separator";

export const MainPage: FC = () => (
  <section className={s.page}>
    <h1 className={s.title}>Поиск</h1>
    <TopAppBar />
    <Separator />
    <StaffList />
  </section>
);
