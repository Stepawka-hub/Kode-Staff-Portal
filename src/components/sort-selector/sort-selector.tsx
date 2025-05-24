import { getSortBy, setSortBy } from "@slices/search";
import { useDispatch, useSelector } from "@store";
import { TSortBy } from "@types";
import { ChangeEvent, FC } from "react";
import s from "./sort-selector.module.css";
import { SortSelectorProps } from './types';

export const SortSelector: FC<SortSelectorProps> = ({ callback }) => {
  const dispatch = useDispatch();
  const sortBy = useSelector(getSortBy);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as TSortBy;
    dispatch(setSortBy(value));
    callback();
  };

  return (
    <div role="radiogroup" aria-label="Сортировка">
      <h2 className={s.title}>Сортировка</h2>
      <fieldset className={s.fieldset}>
        <div className={s.radio}>
          <input
            className={s.input}
            id="asc"
            name="sort"
            type="radio"
            value="asc"
            onChange={handleChange}
            checked={sortBy === "asc"}
          />
          <label htmlFor="asc" className={s.label}>
            По алфавиту
          </label>
        </div>
        <div className={s.radio}>
          <input
            className={s.input}
            id="birthday"
            name="sort"
            type="radio"
            value="birthday"
            onChange={handleChange}
            checked={sortBy === "birthday"}
          />
          <label htmlFor="birthday" className={s.label}>
            По дню рождения
          </label>
        </div>
      </fieldset>
    </div>
  );
};
