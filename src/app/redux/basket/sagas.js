import { takeEvery, select, put, call } from 'redux-saga/effects';

// Selectors
import {
  selectProductsInBasket,
  selectTotalProductsInBasket,
  selectTotalProductsPrice,
} from '../basket/selectors';

// Types
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  INITIALISED_BASKET,
  UPDATE_QUANTITY,
  UPDATE_MATCHING_PRODUCTS,
} from './types';
import { ROUTE_WILL_LOAD } from '~/core/redux/types';

// Utils
import { getLocalState, saveLocalState } from '~/utils/localStorage';
import { deliveryApi } from '~/core/util/ContensisDeliveryApi';
import { productCardMapping } from '~/components/search/transformations/entry-to-card-props.mapper';
import mapJson from '~/core/util/json-mapper';

export const BasketSagas = [
  takeEvery(ROUTE_WILL_LOAD, _ensureInitialised),
  takeEvery(ADD_TO_BASKET, _updateLocalStorage),
  takeEvery(REMOVE_FROM_BASKET, _updateLocalStorage),
  takeEvery(UPDATE_QUANTITY, _updateLocalStorage),
];

function* _ensureInitialised() {
  if (
    getLocalState('basket') &&
    Object.keys(getLocalState('basket')).length > 0
  ) {
    yield put({
      type: INITIALISED_BASKET,
      value: getLocalState('basket'),
      totalItems: getLocalState('totalItems'),
      totalPrice: getLocalState('totalPrice'),
      matchingProducts: getLocalState('matchingProducts'),
    });
  } else {
    yield put({ type: INITIALISED_BASKET });
  }
}

function* _updateLocalStorage() {
  const items = yield select(selectProductsInBasket);
  const totalItems = yield select(selectTotalProductsInBasket);
  const totalPrice = yield select(selectTotalProductsPrice);
  const matchingProducts = yield call(_getMatchingProducts, items);

  saveLocalState('basket', items);
  saveLocalState('totalItems', totalItems);
  saveLocalState('totalPrice', totalPrice);

  if (matchingProducts.length > 0) {
    saveLocalState('matchingProducts', matchingProducts);
    yield put({ type: UPDATE_MATCHING_PRODUCTS, matchingProducts });
  } else {
    saveLocalState('matchingProducts', []);
  }
}

function* _getMatchingProducts(products) {
  if (products && !isObjectEmpty(products)) {
    for (const productEntryId of Object.keys(products)) {
      const productEntry = yield deliveryApi.getEntry(productEntryId, 3);

      if (productEntry.sys.contentTypeId === 'plant') {
        const matchingPots = [];
        const plantVariants = productEntry.plantVariant;
        for (const plantVariant of plantVariants) {
          if (plantVariant.matchingPots) {
            for (const matchingPot of plantVariant.matchingPots) {
              const mappedPot = mapJson(matchingPot, productCardMapping);
              matchingPots.push(mappedPot);
            }
          }
        }
        return matchingPots;
      }
    }
  }
}

function isObjectEmpty(obj) {
  for (var item in obj) {
    return false;
  }
  return true;
}
