import clsx from "clsx";
import { FC } from "react";
import s from "./tab.module.css";
import { TabProps } from "./types";

export const Tab: FC<TabProps> = ({ text, isActive = true, onClick }) => (
  <div
    className={clsx(s.tab, {
      [s.active]: isActive,
    })}
    onClick={onClick}
    data-text={text}
  >
    {text}
  </div>
);
