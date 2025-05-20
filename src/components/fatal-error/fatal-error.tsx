import { FC } from "react";
import s from './fatal-error.module.css';
import flyingSaucerImg from "@images/flying-saucer.png";

export const FatalError: FC = () => (
  <div className={s.container}>
    <img src={flyingSaucerImg} alt="flyingSaucer" />
    <h3 className={s.title}>Какой-то сверхразум все сломал</h3>
    <p className={s.text}>Постараемся быстро починить</p>
    <button className={s.button}>Попробовать снова</button>
  </div>
);
