import React from 'react';
import './styles.css'
import { Checkbox } from '../../../ui/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { STOPS } from '../../../constants/dictionaries';
import { CHANGE_FILTER, SELECT_STOP } from '../../../store/actions/tickets';

const selectStops = ({ tickets }) => {
  const stopsObject = tickets.filters.stops;

  return STOPS.map(stop => ({
    ...stop,
    checked: stopsObject[stop.id]
  }))
}

export function StopsContainer() {
  const dispatch = useDispatch();
  const stops = useSelector(selectStops);

  const selectCheckbox = (id) => (event) => {
    event.preventDefault();
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
  )

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
