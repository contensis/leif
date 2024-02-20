export const doTruncateString = (s: string, n: number, suffix = '...') => {
  return s.slice(0, n) + (s.length > n ? suffix : '');
};
