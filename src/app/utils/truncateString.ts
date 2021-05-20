export const _truncateString = (s: string, n: number, suffix = '...') => {
  return s.slice(0, n) + (s.length > n ? suffix : '');
};
