import { takeEvery, select } from 'redux-saga/effects';
import { selectBasket } from '../basket/selectors';

import { CookieHelper } from '../../../../utils/cookies.class';
import { ADD_TO_BASKET } from './types';

export const BasketSagas = [takeEvery(ADD_TO_BASKET, _updateCookie)];

function* _updateCookie() {
  const basket = yield select(selectBasket);
  CookieHelper.SetCookie('basket', basket.toJS());
}
