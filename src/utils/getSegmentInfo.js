import { formatDuration } from './formatDuration';
import { formatStartEndTime } from './formatStartEndTime';

/**
 * Format segment for ticket card
 * @param segment - segment from server
 */
export function getSegmentInfo(segment) {
  const { origin, destination, date, stops, duration } = segment;

  const startEndTitle = `${origin} - ${destination}`;
  const startEndValue = formatStartEndTime(date, duration);

  const formattedDuration = formatDuration(duration);

  const stopsTitle = stops.length ? `${stops.length} пересадки` : 'Без пересадок';
  const stopsValue = stops.join(', ');

  return { startEndTitle, startEndValue, formattedDuration, stopsTitle, stopsValue };
}
