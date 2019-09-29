import React from 'react';
import './styles.css';

export function SortingContainer() {
  return (
    <section className="sorting__container">
      <button className="sorting__button active">Самый дешёвый</button>
      <button className="sorting__button">Самый быстрый</button>
    </section>
  );
}
