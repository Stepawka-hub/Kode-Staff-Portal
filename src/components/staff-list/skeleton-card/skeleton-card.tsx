import { FC } from "react";
import s from "./skeleton-card.module.css";

export const SkeletonCard: FC = () => {
  return (
    <article className={s.card}>
      <div className={s.avatar}></div>
      <div className={s.lines}>
        <div className={s.firstLine}></div>
        <div className={s.secondLine}></div>
      </div>
    </article>
  );
};
