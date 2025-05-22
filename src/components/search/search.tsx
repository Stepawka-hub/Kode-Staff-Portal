import { useDebounce } from "@hooks/useDebounce";
import listIcon from "@images/search/list.svg";
import loupeIcon from "@images/search/loupe.svg";
import { getSearchQuery, setSearchQuery } from "@slices/search";
import { useDispatch, useSelector } from "@store";
import { ChangeEvent, FC, useState } from "react";
import s from "./search.module.css";

export const Search: FC = () => {
  const dispatch = useDispatch();
  const setQuery = (query: string) => {
    dispatch(setSearchQuery(query));
  };
  const debouncedSearch = useDebounce(setQuery, 1000);

  const searchQuery = useSelector(getSearchQuery);
  const [value, setValue] = useState(searchQuery);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className={s.search}>
      <div className={s.inputContainer}>
        <img src={loupeIcon} alt="LoupeIcon" />
        <input
          className={s.input}
          placeholder="Введи имя, тег, почту..."
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <img src={listIcon} alt="ListIcon" />
      </div>
    </div>
  );
};
