import React from 'react';
import PropTypes from 'prop-types';
import { TicketInfoBlock } from './TicketInfoBlock';
import { TICKET_PROP_TYPE } from '../../../types/tickets';
import './styles.css';
import { formatPrice } from '../../../utils/formatPrice';
import { getSegmentInfo } from '../../../utils/getSegmentInfo';

const renderSegment = (segment, index) => {
  const {
    startEndTitle,
    startEndValue,
    formattedDuration,
    stopsTitle,
    stopsValue,
  } = getSegmentInfo(segment);

  return (
    <div className="ticket__fly-info" key={index}>
      <TicketInfoBlock title={startEndTitle} value={startEndValue} />
      <TicketInfoBlock title="В пути" value={formattedDuration} />
      <TicketInfoBlock title={stopsTitle} value={stopsValue} />
    </div>
  )
}

export function TicketCard({ ticket }) {
  const { price, carrier, segments } = ticket;

  const formattedPrice = formatPrice(price);
  const logoPath = `//pics.avs.io/99/36/${carrier}.png`;

  return (
    <article className="ticket__container">
      <header className="ticket__header">
        <div className="ticket__price__container">
          <p className="ticket__price">{formattedPrice}</p>
        </div>
        <div className="ticket__logo">
          <img src={logoPath} alt="Logo of airline" className="ticket__logo"/>
        </div>
      </header>
      {segments.map(renderSegment)}
    </article>
  );
}

TicketCard.propTypes = {
  ticket: PropTypes.shape(TICKET_PROP_TYPE),
};

TicketCard.defaultProps = {
  ticket: null,
}
