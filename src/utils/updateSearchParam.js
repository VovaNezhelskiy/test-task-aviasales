export function updateSearchParams(key, value) {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set(key, value);

  return searchParams.toString();
}
