import { put } from 'redux-saga/effects';
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
  onRouteLoaded: function* onRouteLoaded({ path, entry, params }) {
    const { sys: { contentTypeId = undefined } = {} } = entry || {}; // Destructure the elements from entry.sys in a null-safe way

    let triggerListing = false;
    // To give the Content Type pages with Listings
    // the right parameters to drive them
    switch (contentTypeId) {
      case ContentTypes.blogListing:
      case ContentTypes.skeletonPage:
        triggerListing = true;
        break;
    }

    yield put({ type: ROUTE_HAS_LOADED, path, entry });

    if (
      path.startsWith('/search') ||
      (triggerListing && Object.keys(ListingPages).includes(contentTypeId))
    ) {
      return {
        searchOptions: {
          mappers: transformations,
          params,
          listingType: ListingPages[contentTypeId] || undefined,
        },
      };
    }
  },
} as WithEvents;
