import { FC } from "react";
import { SkeletonCard } from "./skeleton-card";
import s from "./staff-list.module.css";
import { FatalError } from "@components/fatal-error";

export const StaffList: FC = () => {
  return (
    <>
      <section className={s.errorContainer}>
        <FatalError />
      </section>
      {/* <section className={s.list}>
        {[...Array(8)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </section> */}
    </>
  );
};
