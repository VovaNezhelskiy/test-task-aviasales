import React from 'react';
import './styles.css';
import { Radio } from '../../../ui/radio';
import { SORTING } from '../../../constants/dictionaries';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_FILTER } from '../../../store/actions/tickets';
import useRouter from 'use-react-router';
import { updateSearchParams } from '../../../utils/updateSearchParam';

const selectSort = ({ tickets }) => {
  const sortingId = tickets.filters.sorting;
  const sortingTabs = SORTING.map(sort => ({ ...sort, checked: sortingId === sort.id }));

  return { sortingTabs, sortingId };
};

export function SortingContainer() {
  const dispatch = useDispatch();
  const { sortingTabs } = useSelector(selectSort);
  const { history, location } = useRouter();

  const selectSortOption = (id) => (event) => {
    event.preventDefault();
    const newSearch = updateSearchParams('sorting', id);

    history.push({
      pathname: location.pathname,
      search: newSearch,
    });

    dispatch(CHANGE_FILTER({ sorting: { id }}));
  };

  const renderSortingTab = (sortOption, index) => (
    <Radio
      key={index}
      checked={sortOption.checked}
      onChange={selectSortOption(sortOption.id)}
      name="sort-tabs"
    >
      {sortOption.name}
    </Radio>
  );

  return (
    <section className="sorting__container">
      {sortingTabs.map(renderSortingTab)}
    </section>
  );
}
