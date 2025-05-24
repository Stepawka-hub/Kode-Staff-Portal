import { getSortBy, setSortBy } from "@slices/search";
import { useDispatch, useSelector } from "@store";
import { TSortBy } from "@types";
import { ChangeEvent, FC } from "react";

export const SortSelector: FC = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(getSortBy);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as TSortBy;
    dispatch(setSortBy(value));
  };

  return (
    <div role="radiogroup" aria-label="Сортировка">
      <div>
        <input
          id="asc"
          name="sort"
          type="radio"
          value="asc"
          onChange={handleChange}
          checked={sortBy === "asc"}
        ></input>
        <label htmlFor="asc">По алфавиту</label>
      </div>
      <div>
        <input
          id="birthday"
          name="sort"
          type="radio"
          value="birthday"
          onChange={handleChange}
          checked={sortBy === "birthday"}
        ></input>
        <label htmlFor="birthday">По дню рождения</label>
      </div>
    </div>
  );
};
