import React from 'react';
import './styles.css';
import { TicketInfoBlock } from './TicketInfoBlock';

export function TicketCard() {
  const logoPath = `//pics.avs.io/99/36/${'S7@2x'}.png`
  return (
    <article className="ticket__container">
      <header className="ticket__header">
        <div className="ticket__price__container">
          <p className="ticket__price">13 400 Р</p>
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
