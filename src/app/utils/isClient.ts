export const isClient = () => {
  return typeof window !== 'undefined';
};

export const hasRoot = () => {
  return document.getElementById('app-root');
};
