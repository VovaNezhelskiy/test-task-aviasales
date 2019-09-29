import React from 'react';
import { StopsContainer } from './filters/StopsContainer';
import { SortingContainer } from './filters/SortingContainer';
import { TicketsListContainer } from './list/TicketsListContainer';

export function TicketsContainer() {
  return (
    <div className="centered-container">
      <StopsContainer />

      <div>
        <SortingContainer />
        <TicketsListContainer />
      </div>
    </div>
  );
}
