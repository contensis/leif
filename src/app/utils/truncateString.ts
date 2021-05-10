export const _truncateString = (
  s: string,
  n: number,
  suffix: string = '...'
) => {
  return s.slice(0, n) + (s.length > n ? suffix : '');
};
