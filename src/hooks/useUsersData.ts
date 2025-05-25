import { getCurrentTab } from "@slices/search";
import { getError, getIsFetchUsers, getUsers } from "@slices/staff";
import { useDispatch, useSelector } from "@store";
import { getUsersAsync } from "@thunks/staff";
import { useCallback, useEffect } from "react";

export const useUsersData = () => {
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

  return { users, isLoading, error, fetchUsers, dispatch };
};
