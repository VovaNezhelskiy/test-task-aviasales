import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export function TicketInfoBlock({ title, value }) {
  return (
    <div className="info-block">
      <p className="info-block__title">{title}</p>
      <p className="info-block__value">{value}</p>
    </div>
  );
}

TicketInfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
