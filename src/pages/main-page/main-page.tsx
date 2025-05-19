import { Search } from "@components/search";
import { FC } from "react";
import s from './main-page.module.css';

export const MainPage: FC = () => {
  return (
    <section>
      <h1 className={s.title}>Поиск</h1>
      <Search />
      <div>
        
      </div>
    </section>
  );
};
