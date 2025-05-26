import { createSelector } from "@reduxjs/toolkit";
import { getUsers } from "@slices/staff";

export const getSelectedUser = () => createSelector(
  [getUsers, (_, id: string) => id],
  (users, id) => users.find((u) => u.id === id)
);
