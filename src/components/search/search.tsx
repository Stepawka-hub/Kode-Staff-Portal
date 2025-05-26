import { SortSelector } from "@components/sort-selector";
import { useModal } from "@hooks/useModal";
import { IconList } from "@icons";
import { getSearchQuery, setSearchQuery } from "@slices/search";
import { useDispatch, useSelector } from "@store";
import { FC, memo, useCallback } from "react";
import { SearchString } from "./search-string";
import s from "./search.module.css";
import { useTranslation } from 'react-i18next';

export const Search: FC = memo(() => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(getSearchQuery);
  const { showModal, hideModal } = useModal();
  const { t } = useTranslation();

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
        placeholder={t('search.placeholder')}
        onSearch={handleSearch}
      />
      <button className={s.sortBtn} onClick={handleClick}>
        <IconList className={s.sortIcon} />
      </button>
    </div>
  );
});
