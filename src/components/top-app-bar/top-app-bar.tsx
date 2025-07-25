import { Search } from "@components/search";
import { Tabs } from "@components/tabs";
import { useNetwork } from "@hooks/useNetwork";
import { getCurrentTab } from "@slices/search";
import { useDispatch, useSelector } from "@store";
import { FC, useCallback } from "react";
import { getUsersAsync } from "@thunks/staff";
import { useTranslation } from 'react-i18next';
import clsx from "clsx";
import s from "./top-app-bar.module.css";

export const TopAppBar: FC = () => {
  const dispatch = useDispatch();
  const tab = useSelector(getCurrentTab);
  const {t} = useTranslation();

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
        <h1 className={s.title}>{t('top-app-bar.title')}</h1>

        {!isOnline && (
          <p className={s.networkMessage}>
            {t('top-app-bar.network.offline')}
          </p>
        )}

        {isReconnecting && (
          <p className={s.networkMessage}>{t('top-app-bar.network.reconnecting')}</p>
        )}
        
        {isOnline && !isReconnecting && <Search />}
      </div>
      <div className={s.tabs}>
        <Tabs currentTab={tab} />
      </div>
    </header>
  );
};
