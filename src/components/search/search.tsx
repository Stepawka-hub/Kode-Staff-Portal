import { SortSelector } from "@components/sort-selector";
import { useModal } from "@hooks/useModal";
import { IconList } from "@icons";
import { getSearchQuery, setSearchQuery } from "@slices/search";
import { useDispatch, useSelector } from "@store";
import { FC, useCallback } from "react";
import { SearchString } from "./search-string";
import s from "./search.module.css";

export const Search: FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(getSearchQuery);
  const { showModal, hideModal } = useModal();

  const handleSearch = useCallback((query: string) => {
    dispatch(setSearchQuery(query));
  }, [dispatch]);

  const handleClick = useCallback(() => {
    showModal(<SortSelector callback={hideModal} />)
  }, [showModal, hideModal])

  return (
    <div className={s.search}>
      <SearchString
        initialValue={searchQuery}
        placeholder="Введи имя, фамилию, тег..."
        onSearch={handleSearch}
      />
      <button onClick={handleClick}>
        <IconList />
      </button>
    </div>
  );
};
