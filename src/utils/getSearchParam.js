export function getSearchParam(key) {
  const value = new URLSearchParams(location.search).get(key);

  if (!value) {
    return '';
  }

  return value;
}
