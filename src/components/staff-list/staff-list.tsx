import { EmptySearchResult } from "@components/empty-search-result";
import { FatalError } from "@components/fatal-error";
import { useUsersData } from "@hooks/useUsersData";
import { FC, useMemo } from "react";
import { SkeletonCard } from "./skeleton-card";
import s from "./staff-list.module.css";
import { UserCard } from "./user-card";
import { useSelector } from "@store";
import { getSearchQuery } from "@slices/search";
import { includesRow } from "@utils/helpers/filter";

export const StaffList: FC = () => {
  const { users, isLoading, error, fetchUsers } = useUsersData();
  const searchQuery = useSelector(getSearchQuery);

  const filteredUsers = useMemo(
    () =>
      users.filter((u) =>
        includesRow(searchQuery, [u.firstName, u.lastName, u.userTag])
      ),
    [users, searchQuery]
  );

  if (error) {
    return (
      <section className={s.centeredContainer}>
        <FatalError callback={fetchUsers} />
      </section>
    );
  }

  if (!filteredUsers.length && !isLoading) {
    return (
      <section className={s.centeredContainer}>
        <EmptySearchResult />
      </section>
    );
  }

  return (
    <section className={s.list}>
      {isLoading
        ? [...Array(7)].map((_, i) => <SkeletonCard key={i} />)
        : filteredUsers.map((u) => <UserCard key={u.id} user={u} />)}
    </section>
  );
};
