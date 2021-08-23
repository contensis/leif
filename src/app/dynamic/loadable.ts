import React from 'react';
import ReactLoadable from 'react-loadable';
import { Loading } from '~/core/routes/Loading';

type LoadableArgs =
  | {
      // loader: () => Promise<React.ComponentType<any>>;
      loader: () => Promise<any>;
      loading?: React.FC;
    }
  // | (() => Promise<React.ComponentType>)
  | (() => Promise<any>)
  | { module: string }
  | string;

const Loadable = (args: LoadableArgs) => {
  // Classic react-loadable import
  if (typeof args === 'object' && 'loader' in args)
    return ReactLoadable({
      loader: args.loader,
      loading: args.loading || Loading,
    });

  // Pass in an async function like React.lazy(() => import('./module')); style
  if (typeof args === 'function')
    return ReactLoadable({
      loader: args,
      loading: Loading,
    });

  // Module import via a string (currently not working)
  if (typeof args === 'object' && 'module' in args)
    return ReactLoadable({
      loader: () => import(`${args.module}`),
      loading: Loading,
    });

  // Module import via a string (currently not working)
  if (typeof args === 'string')
    return ReactLoadable({
      loader: () => import(`${args}`),
      loading: Loading,
    });
};

export default Loadable;
