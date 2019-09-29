import PropTypes from 'prop-types';

export const TICKET_SEGMENT_PROP_TYPE = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  date: PropTypes.string,
  stops: PropTypes.arrayOf(PropTypes.string),
  duration: PropTypes.number,
};

export const TICKET_PROP_TYPE = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  segments: [
    PropTypes.shape(TICKET_SEGMENT_PROP_TYPE),
    PropTypes.shape(TICKET_SEGMENT_PROP_TYPE),
  ],
};
