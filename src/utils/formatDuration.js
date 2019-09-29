export function formatDuration(duration) {
  let formattedDuration = '';
  const days = Math.floor(duration / 60 / 24);
  const hours = Math.floor(duration / 60 % 24);
  const minutes = duration % 60;
  if (days) {
    formattedDuration += ` ${days}д`;
  }

  if (hours) {
    formattedDuration += ` ${hours}ч`;
  }
  if (minutes) {
    formattedDuration += ` ${minutes}м`;
  }

  return formattedDuration;
}
