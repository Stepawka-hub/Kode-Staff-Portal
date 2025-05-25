import { FC } from "react";
import { TextDividerProps } from "./types";
import s from "./text-divider.module.css";
import { Separator } from "../separator";

export const TextDivider: FC<TextDividerProps> = ({ text }) => {
  return (
    <div className={s.divider}>
      <Separator className={s.separator} />
      <span className={s.text}>{text}</span>
      <Separator className={s.separator} />
    </div>
  );
};
