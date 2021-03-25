import { isClient, hasRoot } from './isClient';

export const _noScroll = (
  condition: boolean,
  hasWhiteBackground: boolean = false
) => {
  if (isClient()) {
    if (hasRoot()) {
      const bodyEl = document.getElementsByTagName('body')[0];
      if (condition) {
        bodyEl.classList.add('no-scroll');
        if (hasWhiteBackground) {
          bodyEl.classList.add('white');
        }
      } else {
        bodyEl.classList.remove('no-scroll');
      }
    }
  }
};
