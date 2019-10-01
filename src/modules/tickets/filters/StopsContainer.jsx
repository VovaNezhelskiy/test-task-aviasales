import React from 'react';
import './styles.css'
import { Checkbox } from '../../../ui/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { STOPS } from '../../../constants/dictionaries';
import { CHANGE_FILTER } from '../../../store/actions/tickets';
import { updateSearchParams } from '../../../utils/updateSearchParam';
import useRouter from 'use-react-router';

const addOrRemoveId = (existingIds, selectedId) => {
  const hasId = existingIds.some(id => id === selectedId);
  return hasId
    ? existingIds.filter(id => id !== selectedId)
    : [ ...existingIds, selectedId];
};

const selectStops = ({ tickets }) => {
  const stopsObject = tickets.filters.stops;
  const selectedIds = Object
    .keys(stopsObject)
    .filter(id => stopsObject[id])
    .map(id => parseInt(id, 10));

  const stops = STOPS.map(stop => ({ ...stop, checked: stopsObject[stop.id] }));

  return { stops, selectedIds }
}

export function StopsContainer() {
  const dispatch = useDispatch();
  const { stops, selectedIds } = useSelector(selectStops);
  const { history, location } = useRouter();

  const selectCheckbox = (id) => (event) => {
    event.preventDefault();
    const newValue = addOrRemoveId(selectedIds, id).join(',');
    const newSearch = updateSearchParams('stops', newValue);

    history.push({
      pathname: location.pathname,
      search: newSearch,
    });

    dispatch(CHANGE_FILTER({ stop: { id } }))
  };

  const renderCheckbox = (stop, index) => (
    <li className="stops__item" key={index} onClick={selectCheckbox(stop.id)}>
      <Checkbox
        checked={stop.checked}
        name={'stops'}
      >
        {stop.name}
      </Checkbox>
    </li>
  );

  return (
    <section className="stops__container">
      <div className="stops-list">
        <h2 className="stops__header">Количество пересадок</h2>
        <ul className="stops__list">
          {stops.map(renderCheckbox)}
        </ul>
      </div>
    </section>
  );
}
