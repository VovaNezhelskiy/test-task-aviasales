export function getSearchParam(key) {
  const value = new URLSearchParams(location.search).get(key);
  if (!value) {
    return undefined;
  }
  const parsedValue = parseInt(value, 10);
  if (!isNaN(parsedValue)) {
    return parsedValue;
  }

  return value;
}
