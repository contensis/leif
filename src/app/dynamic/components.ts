import Loadable from './loadable';

import { Props as ComposerProps } from '~/components/composer/ComposerWrapper';

export const Composer = Loadable<ComposerProps>(
  () =>
    import(
      /* webpackChunkName: "composer-wrapper" */ '~/components/composer/ComposerWrapper'
    )
);

export const CoreComponents = {
  ZenInfo: Loadable(() =>
    import(
      /* webpackChunkName: "zeninfo.component" */ '@zengenti/contensis-react-base/util'
    ).then(module => module.VersionInfo)
  ),
};
