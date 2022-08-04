import { put, call } from 'redux-saga/effects';
import { setRouteFilters } from '@zengenti/contensis-react-base/search';
import { queryParams, routeParams } from '../util/navigation';
// import { GET_SITE_CONFIG } from '~/core/redux/siteConfig/types';
import { ROUTE_HAS_LOADED, ROUTE_WILL_LOAD } from './types';
import { ContentTypes, ListingPages } from '../schema';

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
  onRouteLoaded: function* onRouteLoaded({
    path,
    entry,
    location,
    staticRoute,
  }) {
    const params = {
      ...routeParams(staticRoute),
      ...queryParams(location && location.search),
    };

    const { sys: { contentTypeId = undefined } = {} } = entry || {}; // Desturucture the elements from entry.sys in a null-safe way

    let triggerListing = false;
    // To give the Content Type pages with Listings
    // the right parameters to drive them
    switch (contentTypeId) {
      case ContentTypes.blogListing:
      case ContentTypes.productListing:
        triggerListing = true;
        break;
    }

    // eslint-disable-next-line no-console
    if (
      path.startsWith('/search') ||
      (triggerListing && Object.keys(ListingPages).includes(contentTypeId))
    ) {
      yield call(setRouteFilters, {
        mappers: transformations,
        params,
        // Only set for listing pages
        listingType: ListingPages[contentTypeId] || undefined,
      } as any);
    }

    yield put({ type: ROUTE_HAS_LOADED, path, entry });

    // const siteConfig = yield select(hasSiteConfig);

    // if (!siteConfig) {
    //   yield put({ type: GET_SITE_CONFIG });
    // }
  },
} as WithEvents;
