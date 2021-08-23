import Loadable from './loadable';

export const CoreComponents = {
  ZenInfo: Loadable({
    loader: () =>
      import(
        /* webpackChunkName: "zeninfo.component" */ '@zengenti/contensis-react-base/util'
      ).then(module => module.VersionInfo),
  }) as React.ComponentType,
};
