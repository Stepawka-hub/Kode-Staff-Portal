import { Loader } from "@components/common/loader";
import { FC } from "react";
import s from "./app-preloader.module.css";

export const AppPreloader: FC = () => (
  <div className={s.preloader}>
    <p className={s.text}>Приложение загружается...</p>
    <div className={s.loader}>
      <Loader />
    </div>
  </div>
);
