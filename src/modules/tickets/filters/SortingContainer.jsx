import React from 'react';
import './styles.css';
import { Radio } from '../../../ui/radio';
import { SORTING } from '../../../constants/dictionaries';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_SORTING } from '../../../store/actions/tickets';
import useRouter from 'use-react-router';
import { updateQueryParam } from '../../../utils/updateQueryParam';
import { parseQueryString } from '../../../utils/parseQueryString';

const selectSort = ({ tickets }) => {
  const selectedId = tickets.filters.sorting;

  return SORTING.map(sort => ({ ...sort, checked: selectedId === sort.id }));
};

export function SortingContainer() {
  const dispatch = useDispatch();
  const sortingTabs = useSelector(selectSort);
  const { history, location } = useRouter();
  const { sorting: sortingId } = parseQueryString(location.search);

  const selectSortOption = (id) => (event) => {
    event.preventDefault();

    history.push({
      pathname: location.pathname,
      search: updateQueryParam(location.search || '', 'sorting', id), // remove leading &
    });
  };

  React.useEffect(() => {
    dispatch(SELECT_SORTING(sortingId));
  }, [location.search]);

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
