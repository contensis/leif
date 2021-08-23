import React from 'react';
import ReactLoadable from 'react-loadable';
import { Loading } from '~/core/routes/Loading';

type LoadableArgs<IProps> =
  // | {
  //     // loader: () => Promise<React.ComponentType<any>>;
  //     loader: () => Promise<any>;
  //     loading?: React.FC;
  //   }
  | LoadableExport.OptionsWithoutRender<IProps>
  // | (() => Promise<React.ComponentType>)
  | (() => Promise<any>)
  | { module: string }
  | string;

const Loadable = <Props>(args: LoadableArgs<Props>) => {
  let component: any = null;

  // Classic react-loadable import
  if (typeof args === 'object' && 'loader' in args && !('render' in args))
    component = ReactLoadable<Props, typeof args.loader>({
      loader: args.loader,
      loading: args.loading || Loading,
    });

  // Pass in an async function like React.lazy(() => import('./module')); style
  if (typeof args === 'function')
    component = ReactLoadable<Props, typeof args>({
      loader: args,
      loading: Loading,
    });

  // Module import via a string (currently not working)
  if (typeof args === 'object' && 'module' in args)
    component = ReactLoadable<Props, typeof args>({
      loader: () => import(`${args.module}`),
      loading: Loading,
    });

  // Module import via a string (currently not working)
  if (typeof args === 'string')
    component = ReactLoadable<Props, any>({
      loader: () => import(`${args}`),
      loading: Loading,
    });

  return component as React.ComponentType<Props>;
};

export default Loadable;
