import { FC } from "react";
import { getCurrentTab, setCurrentTab } from "@slices/app";
import { useDispatch, useSelector } from "@store";
import { TDepartments } from "src/types/types";
import { Tab } from "./tab";
import { tabs } from "@utils/constants";
import s from "./tabs.module.css";

export const Tabs: FC = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector(getCurrentTab);

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
