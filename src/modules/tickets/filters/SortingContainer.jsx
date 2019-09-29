import React from 'react';
import './styles.css';
import { Radio } from '../../../ui/radio';
import { SORTING } from '../../../constants/dictionaries';
import { useSelector } from 'react-redux';

const selectSort = ({ filters }) => {
  return SORTING;
}

export function SortingContainer() {
  const sortingTabs = useSelector(selectSort);

  const selectSortOption = (id) => (event) => {
    event.preventDefault();
    console.log(id);
  }

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
