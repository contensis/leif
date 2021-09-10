import { takeEvery, select, put } from 'redux-saga/effects';

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
} from './types';
import { ROUTE_WILL_LOAD } from '~/core/redux/types';

// Utils
import { getLocalState, saveLocalState } from '~/utils/localStorage';

export const BasketSagas = [
  takeEvery(ROUTE_WILL_LOAD, _ensureInitialised),
  takeEvery(ADD_TO_BASKET, _updateLocalStorage),
  takeEvery(REMOVE_FROM_BASKET, _updateLocalStorage),
  takeEvery(UPDATE_QUANTITY, _updateLocalStorage),
];

function* _ensureInitialised() {
  if (getLocalState('basket')) {
    yield put({
      type: INITIALISED_BASKET,
      value: getLocalState('basket'),
      totalItems: getLocalState('totalItems'),
      totalPrice: getLocalState('totalPrice'),
    });
  } else {
    yield put({ type: INITIALISED_BASKET });
  }
}

function* _updateLocalStorage() {
  const items = yield select(selectProductsInBasket);
  const totalItems = yield select(selectTotalProductsInBasket);
  const totalPrice = yield select(selectTotalProductsPrice);
  saveLocalState('basket', items);
  saveLocalState('totalItems', totalItems);
  saveLocalState('totalPrice', totalPrice);
}
