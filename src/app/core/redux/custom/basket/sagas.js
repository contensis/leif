import { takeEvery, select, put } from 'redux-saga/effects';
import { selectProductsInBasket } from '../basket/selectors';

import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INITIALISED_BASKET } from './types';
import { ROUTE_WILL_LOAD } from '../../types';

import { isClient } from '../../../../utils/isClient';

export const BasketSagas = [
  takeEvery(ROUTE_WILL_LOAD, _ensureInitialised),
  takeEvery(ADD_TO_BASKET, _updateCookie),
  takeEvery(REMOVE_FROM_BASKET, _updateCookie),
];

function* _ensureInitialised() {
  let basket = null;
  if (isClient()) {
    basket = window.localStorage.getItem('basket');
  }

  if (basket) {
    yield put({
      type: INITIALISED_BASKET,
      value: basket,
    });
  } else {
    yield put({ type: INITIALISED_BASKET });
  }
}

function* _updateCookie() {
  const products = yield select(selectProductsInBasket);

  if (isClient() && products) {
    window.localStorage.setItem('basket', JSON.stringify(products));
  }
}
