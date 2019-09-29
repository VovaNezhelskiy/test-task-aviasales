import React from 'react';
import { HeaderContainer } from './header/HeaderContainer';
import { TicketsContainer } from './tickets/TicketsContainer';
import './styles.css';

export function AppContainer() {
  return (
    <section className="app__container">
      <div className="container">
        <HeaderContainer />
        <TicketsContainer />
      </div>
    </section>
  );
}
