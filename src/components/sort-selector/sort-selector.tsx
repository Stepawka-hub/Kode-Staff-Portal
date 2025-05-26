import { getSortBy, setSortBy } from "@slices/search";
import { useDispatch, useSelector } from "@store";
import { TSortBy } from "@types";
import { ChangeEvent, FC } from "react";
import s from "./sort-selector.module.css";
import { SortSelectorProps } from "./types";
import { useTranslation } from "react-i18next";

export const SortSelector: FC<SortSelectorProps> = ({ callback }) => {
  const dispatch = useDispatch();
  const sortBy = useSelector(getSortBy);
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as TSortBy;
    dispatch(setSortBy(value));
    callback();
  };

  return (
    <div role="radiogroup" aria-label={t('sort.title')}>
      <h2 className={s.title}>{t("sort.title")}</h2>
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
            {t("sort.asc")}
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
            {t("sort.birthday")}
          </label>
        </div>
      </fieldset>
    </div>
  );
};
