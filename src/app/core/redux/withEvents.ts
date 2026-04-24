import { put } from 'redux-saga/effects';
import { ROUTE_HAS_LOADED, ROUTE_WILL_LOAD } from './types';
import { ContentTypes } from '../schema';

import transformations from '~/components/search/transformations';

import { RouteLoadOptions, WithEvents } from '@zengenti/contensis-react-base';

export default {
  onRouteLoad: function* onRouteLoad({
    path,
    location,
    // staticRoute,
    statePath,
  }) {
    yield put({ type: ROUTE_WILL_LOAD, path, location });

    // Set params for routing saga
    const options: RouteLoadOptions = {
      customNavigation: {
        ancestors: true,
        children: true,
        siblings: true,
        tree: true,
      },
      entryLinkDepth: 1,
      preventScrollTop: path === statePath,
    };
    return options;
  },
  onRouteLoaded: function* onRouteLoaded({ path, entry }) {
    yield put({ type: ROUTE_HAS_LOADED, path, entry });

    return {
      searchOptions: {
        mappers: transformations,
      },
    };
  },
} as WithEvents;
