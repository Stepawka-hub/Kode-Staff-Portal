import { Search } from "@components/search";
import { Tabs } from "@components/tabs";
import { FC, useCallback } from "react";
import s from "./top-app-bar.module.css";
import { useNetwork } from "@hooks/useNetwork";
import { useDispatch, useSelector } from "@store";
import { getUsersAsync } from "@thunks/staff";
import { getCurrentTab } from "@slices/search";
import clsx from "clsx";

export const TopAppBar: FC = () => {
  const dispatch = useDispatch();
  const tab = useSelector(getCurrentTab);

  const fetchUsers = useCallback(async () => {
    await dispatch(getUsersAsync(tab));
  }, [dispatch, tab]);

  const { isOnline, isReconnecting } = useNetwork({ callback: fetchUsers });

  return (
    <header className={s.header}>
      <div
        className={clsx(s.search, {
          [s.offline]: !isOnline,
          [s.reconnect]: isReconnecting,
        })}
      >
        <h1 className={s.title}>Поиск</h1>
        {!isOnline && (
          <p className={s.networkMessage}>
            Не могу обновить данные. Проверь соединение с интернетом.
          </p>
        )}
        {isReconnecting && (
          <p className={s.networkMessage}>Секундочку гружусь...</p>
        )}
        {isOnline && !isReconnecting && <Search />}
      </div>
      <div className={s.tabs}>
        <Tabs currentTab={tab} />
      </div>
    </header>
  );
};
