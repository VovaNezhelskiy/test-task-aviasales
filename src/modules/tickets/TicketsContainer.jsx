import React from 'react';
import { StopsContainer } from './filters/StopsContainer';
import { SortingContainer } from './filters/SortingContainer';
import { TicketsListContainer } from './list/TicketsListContainer';

import './styles.css';

export function TicketsContainer() {
  return (
    <div className="tickets__container centered-container">
      <StopsContainer />

      <div className="tickects-sorting__container">
        <SortingContainer />
        <TicketsListContainer />
      </div>
    </div>
  );
}
