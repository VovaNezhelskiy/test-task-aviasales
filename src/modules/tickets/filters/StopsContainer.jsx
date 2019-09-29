import React from 'react';
import './styles.css'

export function StopsContainer() {
  return (
    <section className="stops__container">
      <div className="stops-list">
        <h2 className="stops__header">Количество пересадок</h2>
        <ul className="stops__list">
          <li className="stops__item">
            <p>Все</p>
          </li>
          <li className="stops__item">
            <p>Без пересадок</p>
          </li>
          <li className="stops__item">
            <p>1 пересадка</p>
          </li>
          <li className="stops__item">
            <p>2 пересадка</p>
          </li>
          <li className="stops__item">
            <p>3 пересадка</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
