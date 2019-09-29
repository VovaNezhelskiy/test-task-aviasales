export function sortFromKey(keyExtractor) {
  return function (a, b) {
    if (keyExtractor(a) > keyExtractor(b)) {
      return 1;
    } else if (keyExtractor(a) < keyExtractor(b)) {
      return -1;
    } else {
      return 0;
    }
  }
}
