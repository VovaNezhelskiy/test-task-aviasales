import React from 'react';
import PropTypes from 'prop-types';
import { TicketInfoBlock } from './TicketInfoBlock';
import { TICKET_PROP_TYPE } from '../../../types/tickets';
import './styles.css';

export function TicketCard({ ticket }) {
  const { price, carrier } = ticket;

  const logoPath = `//pics.avs.io/99/36/${carrier}.png`;

  return (
    <article className="ticket__container">
      <header className="ticket__header">
        <div className="ticket__price__container">
          <p className="ticket__price">{price}Р</p>
        </div>
        <div className="ticket__logo">
          <img src={logoPath} alt="Logo of airline" className="ticket__logo"/>
        </div>
      </header>
      <div className="ticket__fly-info">
        <TicketInfoBlock title="MOW-HKT" value="10:45 - 08:00" />
        <TicketInfoBlock title="В пути" value="21ч 15м" />
        <TicketInfoBlock title="2 пересадки" value="HKG, JNB" />
      </div>
      <div className="ticket__fly-info">
        <TicketInfoBlock title="MOW-HKT" value="10:45 - 08:00" />
        <TicketInfoBlock title="В пути" value="21ч 15м" />
        <TicketInfoBlock title="2 пересадки" value="HKG, JNB" />
      </div>
    </article>
  );
}

TicketCard.propTypes = {
  ticket: PropTypes.shape(TICKET_PROP_TYPE),
};

TicketCard.defaultProps = {
  ticket: null,
}
