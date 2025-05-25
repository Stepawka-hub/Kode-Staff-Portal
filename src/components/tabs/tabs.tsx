import { setCurrentTab } from "@slices/search";
import { useDispatch } from "@store";
import { tabs } from "@utils/constants";
import { FC } from "react";
import { TDepartments } from "src/types/types";
import { Tab } from "./tab";
import s from "./tabs.module.css";
import { TabsProps } from "./types";

export const Tabs: FC<TabsProps> = ({ currentTab }) => {
  const dispatch = useDispatch();

  const handleTabClick = (tab: TDepartments) => () => {
    dispatch(setCurrentTab(tab));
  };

  return (
    <div className={s.tabs}>
      {tabs.map((t) => (
        <Tab
          key={t.id}
          text={t.label}
          isActive={t.id === currentTab}
          onClick={handleTabClick(t.id)}
        />
      ))}
    </div>
  );
};
