import { isClient } from './isClient';

export const doToggleOverlay = (doShow: boolean) => {
  if (isClient()) {
    window.scrollTo({
      top: 0,
    });
    const root = document?.getElementById('root');
    if (root) {
      root.setAttribute('data-overlay', doShow ? 'true' : 'false');
    }
  }
};
