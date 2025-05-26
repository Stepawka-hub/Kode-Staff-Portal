import { EmptySearchResult } from "@components/empty-search-result";
import { FatalError } from "@components/fatal-error";
import { useUsersData } from "@hooks/useUsersData";
import { getSearchQuery, getSortBy } from "@slices/search";
import { useSelector } from "@store";
import { includesRow } from "@utils/helpers/filter";
import { FC, useMemo } from "react";
import { BirthdayList } from "./birthday-list";
import { FlatList } from "./flat-list";
import { SkeletonCard } from "./skeleton-card";
import s from "./staff-list.module.css";

export const StaffList: FC = () => {
  const { users, isLoading, error, fetchUsers } = useUsersData();
  const searchQuery = useSelector(getSearchQuery);
  const sortBy = useSelector(getSortBy);

  const filteredUsers = useMemo(
    () =>
      users.filter((u) =>
        includesRow(searchQuery, [u.firstName, u.lastName, u.userTag])
      ),
    [users, searchQuery]
  );

  if (!error) {
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
      {isLoading ? (
        [...Array(7)].map((_, i) => <SkeletonCard key={i} />)
      ) : sortBy === "asc" ? (
        <FlatList users={filteredUsers} />
      ) : (
        <BirthdayList users={filteredUsers} />
      )}
    </section>
  );
};
