import { takeEvery, select, put, debounce } from 'redux-saga/effects';

import { Op, Query } from 'contensis-delivery-api';
import { cachedSearch } from '../../../util/ContensisDeliveryApi';

// Types
import { SET_SEARCH_RESULTS, SET_SEARCH_TERM } from './types';

// Mappers
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';
import { SearchContentTypes } from '../../../schema';

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
        Op.and(
          Op.equalTo('sys.versionStatus', 'published'),
          Op.or(Op.in('sys.contentTypeId', [...SearchContentTypes]))
        ),
        Op.freeText('entryTitle', searchTerm),
        Op.freeText('entryDescription', searchTerm),
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
