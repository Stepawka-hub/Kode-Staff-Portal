import { FC, useCallback, useEffect } from "react";
import { SkeletonCard } from "./skeleton-card";
import s from "./staff-list.module.css";
import { FatalError } from "@components/fatal-error";
import { useDispatch, useSelector } from "@store";
import { getUsersAsync } from "@thunks/staff";
import { getError, getIsFetchUsers, getUsers } from "@slices/staff";
import { UserCard } from "./user-card";
import { getCurrentTab } from "@slices/search";
import { EmptySearchResult } from "@components/empty-search-result";

export const StaffList: FC = () => {
  const dispatch = useDispatch();
  const tab = useSelector(getCurrentTab);
  const users = useSelector(getUsers);
  const isLoading = useSelector(getIsFetchUsers);
  const error = useSelector(getError);

  const fetchUsers = useCallback(() => {
    dispatch(getUsersAsync(tab));
  }, [dispatch, tab]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (error) {
    return (
      <section className={s.centeredContainer}>
        <FatalError callback={fetchUsers} />
      </section>
    );
  }

  if (!users.length && !isLoading) {
    return (
      <section className={s.centeredContainer}>
        <EmptySearchResult />
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
