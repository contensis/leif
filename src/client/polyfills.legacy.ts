import { enableES5 } from 'immer';

enableES5();

declare const __magic__: any;

/* eslint-disable no-undef */
// The polyfill starts here.
(function () {
  if (typeof globalThis === 'object') return;
  Object.defineProperty(Object.prototype, '__magic__', {
    get: function () {
      return this;
    },
    configurable: true,
  });
  __magic__.globalThis = __magic__;
  delete (Object.prototype as any).__magic__;
})();
// The polyfill ends here.

export default function loadPolyfills() {
  const fillFetch = () =>
    new Promise<void>(resolve => {
      if ('fetch' in window) return resolve();

      require.ensure(
        [],
        () => {
          require('whatwg-fetch');

          resolve();
        },
        'fetch'
      );
    });

  const fillCoreJs = () =>
    new Promise<void>(resolve => {
      if (
        'startsWith' in String.prototype &&
        'endsWith' in String.prototype &&
        'includes' in Array.prototype &&
        'assign' in Object &&
        'keys' in Object
      )
        return resolve();

      require.ensure(
        [],
        () => {
          require('core-js');

          resolve();
        },
        'core-js'
      );
    });

  return Promise.all([fillFetch(), fillCoreJs()]);
}
