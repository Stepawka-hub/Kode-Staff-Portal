import { FC, useEffect } from "react";
import { SkeletonCard } from "./skeleton-card";
import s from "./staff-list.module.css";
import { FatalError } from "@components/fatal-error";
import { useDispatch, useSelector } from "@store";
import { getUsersAsync } from "@thunks/staff";
import { getError, getIsFetchUsers, getUsers } from "@slices/staff";
import { UserCard } from "./user-card";

export const StaffList: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  const isLoading = useSelector(getIsFetchUsers);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  if (error) {
    return (
      <section className={s.errorContainer}>
        <FatalError />
      </section>
    );
  }

  return (
    <section className={s.list}>
      {isLoading
        ? [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
        : users.map((u) => <UserCard key={u.id} user={u} />)}
    </section>
  );
};
