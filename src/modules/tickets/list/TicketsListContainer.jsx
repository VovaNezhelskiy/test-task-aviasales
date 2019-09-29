import React from 'react';
import { TicketsList } from './TicketsList';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchId, searchTickets } from '../../../store/actions/tickets';
import { LOAD_STATE } from '../../../constants/loadState';

const selectTickets = (state) => {
  const tickets = state.tickets.list.value.slice(0, 5);
  const loadingState = state.tickets.list.loadingState;

  return { tickets, loadingState };
}

export function TicketsListContainer() {
  const dispatch = useDispatch();
  const { tickets, loadingState } = useSelector(selectTickets);

  const loadInitialTickets = async () => {
    await dispatch(getSearchId());
    await dispatch(searchTickets());
  };

  React.useEffect(() => {
    loadInitialTickets()
  }, []);

  React.useEffect(() => {
    if (loadingState === LOAD_STATE.FAILED) {
      dispatch(searchTickets())
    }
  }, [loadingState]);

  return (
    <TicketsList tickets={tickets}/>
  );
}
