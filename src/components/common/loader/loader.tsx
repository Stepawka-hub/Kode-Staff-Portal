import { FC } from "react";
import s from "./loader.module.css";
import loaderImg from "@images/loader.svg";

export const Loader: FC = () => (
  <div className={s.container}>
    <img className={s.loader} src={loaderImg} alt="Loader" />
  </div>
);
