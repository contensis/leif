import { takeEvery, select, put } from 'redux-saga/effects';
import { selectProductsInBasket } from '../basket/selectors';

import { CookieHelper } from '../../../../utils/cookies.class';
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INITIALISED_BASKET } from './types';
import { ROUTE_WILL_LOAD } from '../../types';

export const BasketSagas = [
  takeEvery(ROUTE_WILL_LOAD, _ensureInitialised),
  takeEvery(ADD_TO_BASKET, _updateCookie),
  takeEvery(REMOVE_FROM_BASKET, _updateCookie),
];

function* _ensureInitialised() {
  const basketCookie = CookieHelper.GetCookie('basket');
  if (basketCookie) {
    const parsedBasketCookie = JSON.parse(basketCookie);
    yield put({
      type: INITIALISED_BASKET,
      value: parsedBasketCookie,
    });
  } else {
    yield put({ type: INITIALISED_BASKET });
  }
}

function* _updateCookie() {
  const products = yield select(selectProductsInBasket);
  if (products) {
    CookieHelper.SetCookie('basket', products);
  }
}
