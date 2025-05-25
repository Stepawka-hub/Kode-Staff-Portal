import { FC } from "react";
import s from "./separator.module.css";
import clsx from "clsx";
import { SeparatorProps } from './type';

export const Separator: FC<SeparatorProps> = ({ className }) => (
  <div className={clsx(s.separator, className)}></div>
);
