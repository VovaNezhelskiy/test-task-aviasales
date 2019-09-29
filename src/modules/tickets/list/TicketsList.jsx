import React from 'react';
import { TicketCard } from './TicketCard';

export function TicketsList() {
  return (
    <section className="tickets-list__container">
      <div className="tickets-list__card-container"><TicketCard /></div>
      <div className="tickets-list__card-container"><TicketCard /></div>
      <div className="tickets-list__card-container"><TicketCard /></div>
    </section>
  );
}
