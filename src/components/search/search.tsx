import { FC } from "react";

import s from "./search.module.css";
import loupeIcon from "@images/search/loupe.svg";
import listIcon from "@images/search/list.svg";

export const Search: FC = () => {
  return (
    <div className={s.search}>
      <div className={s.inputContainer}>
        <img src={loupeIcon} alt="LoupeIcon" />
        <input className={s.input} placeholder="Введи имя, тег, почту..." />
      </div>
      <div>
        <img src={listIcon} alt="ListIcon" />
      </div>
    </div>
  );
};
