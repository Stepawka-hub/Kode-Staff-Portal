import { FC, memo } from "react";
import { BirthdayListProps } from "./types";
import { UserCard } from "../user-card";

export const BirthdayList: FC<BirthdayListProps> = memo(({ users }) => {
  const sortedUsers = [...users].sort(
    (a, b) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
  );

  return (
    <>
      {sortedUsers.map((u) => (
        <UserCard key={u.id} user={u} showBirthday={true} />
      ))}
    </>
  );
});
