import { FC } from "react";
import { TextDividerProps } from "./types";
import s from "./text-divider.module.css";
import { Separator } from "../separator";

export const TextDivider: FC<TextDividerProps> = ({ text }) => {
  return (
    <div className={s.divider}>
      <Separator />
      <span className={s.text}>{text}</span>
      <Separator />
    </div>
  );
};
