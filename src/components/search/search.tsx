import { getSearchQuery, setSearchQuery } from "@slices/search";
import { useDispatch, useSelector } from "@store";
import { FC } from "react";
import { SearchString } from "./search-string";
import s from "./search.module.css";
import { IconList } from "@icons";

export const Search: FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(getSearchQuery);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <div className={s.search}>
      <SearchString
        initialValue={searchQuery}
        placeholder="Введи имя, фамилию, тег..."
        onSearch={handleSearch}
      />
      <div>
        <IconList />
      </div>
    </div>
  );
};
