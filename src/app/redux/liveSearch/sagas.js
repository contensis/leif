import { takeEvery, select, put, debounce } from 'redux-saga/effects';

import { Op, Query } from 'contensis-delivery-api';
import { cachedSearch } from '~/core/util/ContensisDeliveryApi';

// Types
import { SET_SEARCH_RESULTS, SET_SEARCH_TERM } from './types';

// Mappers
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import { SearchContentTypes } from '~/core/schema';

// Selectors
import { selectSearchTerm } from './selectors';

export const LiveSearchSagas = [
  takeEvery(SET_SEARCH_TERM, _debounceFetchResults),
];

function* _fetchResults() {
  const searchTerm = yield select(selectSearchTerm);
  if (searchTerm) {
    try {
      const expressions = [
        Op.equalTo('sys.versionStatus', 'published'),
        Op.in('sys.contentTypeId', ...SearchContentTypes),
        Op.or(
          Op.freeText('entryTitle', searchTerm).weight(100),
          Op.contains('entryTitle', searchTerm).weight(100),
          Op.freeText('entryDescription', searchTerm).weight(50),
          Op.freeText('searchContent', searchTerm).weight(10),
          Op.freeText('pageMetadata.metaDescription', searchTerm).weight(50)
        ),
      ];
      const query = new Query(...expressions);
      query.pageSize = 4;
      const payload = yield cachedSearch.search(query, 1);
      const { items } = payload || {};
      yield put({
        type: SET_SEARCH_RESULTS,
        value: mapEntriesToResults(items),
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

function* _debounceFetchResults() {
  yield debounce(1000, SET_SEARCH_TERM, _fetchResults);
}
