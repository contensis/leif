import loadable from '@loadable/component';

import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';

export const Composer = loadable<ComposerProps>(
  () =>
    import(
      /* webpackChunkName: "composer-wrapper" */ '~/components/composer/ComposerWrapper'
    )
);

export const CoreComponents = {
  ZenInfo: loadable(
    () =>
      import(
        /* webpackChunkName: "zeninfo.component" */ '@zengenti/contensis-react-base/util'
      ),
    {
      resolveComponent: module => module.VersionInfo,
    }
  ),
};
