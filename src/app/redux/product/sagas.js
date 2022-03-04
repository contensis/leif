import { takeEvery, select, put } from 'redux-saga/effects';

import { Op, Query } from 'contensis-delivery-api';
import { cachedSearch } from '~/core/util/ContensisDeliveryApi';

// Types
import { SET_ENTRY } from '~/core/redux/types';
import { SET_PRODUCT_REVIEWS } from './types';

// Selectors
import { selectCurrentPath, selectRouteEntryID } from '~/core/redux/selectors';

// Mappers
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

export const ProductSagas = [takeEvery(SET_ENTRY, _getReviews)];

function* _getReviews() {
  const currentPath = yield select(selectCurrentPath);
  if (currentPath && currentPath.includes('/products')) {
    const productId = yield select(selectRouteEntryID);
    if (productId) {
      try {
        const expressions = [
          Op.and(
            Op.equalTo('sys.versionStatus', 'published'),
            Op.or(Op.equalTo('sys.contentTypeId', 'review'))
          ),
          Op.equalTo('product.sys.id', productId),
        ];
        const query = new Query(...expressions);
        query.pageSize = 1;
        const payload = yield cachedSearch.search(query, 1);
        const { items } = payload || {};
        yield put({
          type: SET_PRODUCT_REVIEWS,
          value: mapEntriesToResults(items),
        });
      } catch (error) {
        throw new Error(error);
      }
    }
  }
}
