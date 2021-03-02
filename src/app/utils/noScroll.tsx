import { isClient, hasRoot } from './isClient';

export const _noScroll = (condition:boolean) => {
  if (isClient()) {
    if (hasRoot()) {
      const bodyEl = document.getElementsByTagName('body')[0];
      if (condition) {
        bodyEl?.classList.add('no-scroll');
      } else {
        bodyEl?.classList.remove('no-scroll');
      } 
    }
  }
}
