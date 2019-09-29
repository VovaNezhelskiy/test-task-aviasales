export const END_POINTS = {
  searchId: () => 'search',
  tickets: (id) => `tickets/?searchId=${id}`,
};
