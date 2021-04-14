import { isClient } from './isClient';

export const addOverlayCSS = () => {
  if (isClient()) {
    window.scrollTo({
      top: 0,
    });
    const rootEl = document.getElementById('root');
    if (rootEl) rootEl.classList.add('overlay');
  }
};

export const removeOverlayCSS = () => {
  if (isClient()) {
    const rootEl = document.getElementById('root');
    if (rootEl) rootEl.classList.remove('overlay');
  }
};
