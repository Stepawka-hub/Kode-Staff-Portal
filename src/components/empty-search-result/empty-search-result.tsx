import { FC } from "react";
import s from './empty-search-result.module.css';
import glassImg from '@images/glass.png';

export const EmptySearchResult: FC = () => (
  <div className={s.container}>
    <img src={glassImg} alt="glass" />
    <h3 className={s.title}>Мы никого не нашли</h3>
    <p className={s.text}>Попробуй скорректировать запрос</p>
  </div>
);
