import { setCurrentTab } from "@slices/search";
import { useDispatch } from "@store";
import { DEPARTMENTS as tabs } from "@utils/constants";
import { FC } from "react";
import { TDepartments } from "src/types/types";
import { Tab } from "./tab";
import s from "./tabs.module.css";
import { TabsProps } from "./types";
import { useTranslation } from 'react-i18next';

export const Tabs: FC<TabsProps> = ({ currentTab }) => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const handleTabClick = (tab: TDepartments) => () => {
    dispatch(setCurrentTab(tab));
  };

  return (
    <div className={s.tabs}>
      {tabs.map((tabId) => (
        <Tab
          key={tabId}
          text={t(`tabs.${tabId}`)}
          isActive={tabId === currentTab}
          onClick={handleTabClick(tabId)}
        />
      ))}
    </div>
  );
};
