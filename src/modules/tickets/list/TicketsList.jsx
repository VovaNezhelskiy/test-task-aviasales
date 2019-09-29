import React from 'react';
import PropTypes from 'prop-types';
import { TicketCard } from './TicketCard';
import { TICKET_PROP_TYPE } from '../../../types/tickets';

const renderTicket = (ticket, index) => (
  <div className="tickets-list__card-container" key={index}>
    <TicketCard ticket={ticket}/>
  </div>
);

export function TicketsList({ tickets }) {
  return (
    <section className="tickets-list__container">
      {tickets.map(renderTicket)}
    </section>
  );
}

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape(TICKET_PROP_TYPE)),
};

TicketsList.defaultProps = {
  tickets: [],
};
