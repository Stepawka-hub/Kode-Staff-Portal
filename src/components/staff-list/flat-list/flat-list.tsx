import { FC } from "react";
import { UserCard } from "../user-card";
import { FlatListProps } from "./types";

export const FlatList: FC<FlatListProps> = ({ users }) => {
  const sortedUsers = [...users].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  return sortedUsers.map((u) => <UserCard key={u.id} user={u} />);
};
