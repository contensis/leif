import { isClient, hasRoot } from './isClient';

export const BodyLockScroll = (condition:boolean) => {
  if (isClient()) {
    if (hasRoot()) {
      const rootEl = document.getElementById('app-root');
      if (condition) {
        rootEl?.classList.add('no-scroll');
      } else {
        rootEl?.classList.remove('no-scroll');
      } 
    }
  }
}
