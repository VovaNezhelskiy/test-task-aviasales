import React from 'react';
import './styles.css';
import { Radio } from '../../../ui/radio';
import { SORTING } from '../../../constants/dictionaries';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_SORTING } from '../../../store/actions/tickets';

const selectSort = ({ tickets }) => {
  const selectedId = tickets.filters.sorting;

  return SORTING.map(sort => ({ ...sort, checked: selectedId === sort.id }));
};

export function SortingContainer() {
  const dispatch = useDispatch();
  const sortingTabs = useSelector(selectSort);

  const selectSortOption = (id) => (event) => {
    event.preventDefault();
    dispatch(SELECT_SORTING(id));
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
