import React from 'react';

function TicketCardSkeleton() {
  return (
    <div className="ticket__skeleton">
      <header className="ticket__skeleton__header">
        <div className="skeleton__inner skeleton__oval"/>
        <div className="skeleton__inner skeleton__oval"/>
      </header>
      <div className="ticket__skeleton__segments">
        <div className="skeleton__inner segments__block"/>
        <div className="skeleton__inner segments__block"/>
        <div className="skeleton__inner segments__block"/>
      </div>
      <div className="ticket__skeleton__segments">
        <div className="skeleton__inner segments__block"/>
        <div className="skeleton__inner segments__block"/>
        <div className="skeleton__inner segments__block"/>
      </div>
    </div>
  )
}

export function Skeleton() {
  return (
    <React.Fragment>
      <div className="tickets-list__card-container">
        <TicketCardSkeleton />
      </div>
      <div className="tickets-list__card-container">
        <TicketCardSkeleton />
      </div>
      <div className="tickets-list__card-container">
        <TicketCardSkeleton />
      </div>
      <div className="tickets-list__card-container">
        <TicketCardSkeleton />
      </div>
    </React.Fragment>
  );
}
