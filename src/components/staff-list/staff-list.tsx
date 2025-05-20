import { FC } from "react";
import { SkeletonCard } from "./skeleton-card";
import s from './staff-list.module.css';

export const StaffList: FC = () => {
  return (
    <section className={s.list}>
      {[...Array(6)].map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </section>
  );
};
