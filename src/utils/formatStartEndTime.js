const formatTime = (time) => (time < 10) ? `0${time}` : time;

export function formatStartEndTime(start, end) {
  const startDate = new Date(start);
  let endDate = new Date(start);
  endDate.setMinutes(startDate.getMinutes() + end);

  const startHours = formatTime(startDate.getHours());
  const startMinutes = formatTime(startDate.getMinutes());
  const endHours = formatTime(endDate.getHours());
  const endMinutes = formatTime(endDate.getMinutes());

  return `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`
}
