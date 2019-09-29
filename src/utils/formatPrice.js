export function formatPrice(price) {
  if (price === null || price === undefined) {
    return null;
  }

  const localizedPrice = new Intl.NumberFormat('ru').format(price);

  return `${localizedPrice} Р`;
}
