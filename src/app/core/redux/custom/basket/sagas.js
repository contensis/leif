import { takeEvery, select, put } from 'redux-saga/effects';
import {
  selectProductsInBasket,
  selectTotalProductsInBasket,
} from '../basket/selectors';

import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INITIALISED_BASKET } from './types';
import { ROUTE_WILL_LOAD } from '../../types';

export const BasketSagas = [
  takeEvery(ROUTE_WILL_LOAD, _ensureInitialised),
  takeEvery(ADD_TO_BASKET, _updateLocalStorage),
  takeEvery(REMOVE_FROM_BASKET, _updateLocalStorage),
];

function* _ensureInitialised() {
  if (getLocalState('basket')) {
    yield put({
      type: INITIALISED_BASKET,
      value: getLocalState('basket'),
      total: getLocalState('total'),
    });
  } else {
    yield put({ type: INITIALISED_BASKET });
  }
}

function* _updateLocalStorage() {
  const items = yield select(selectProductsInBasket);
  const total = yield select(selectTotalProductsInBasket);
  saveLocalState('basket', items);
  saveLocalState('total', total);
}

// Local Storage Functions
const saveLocalState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem(key, serializedState);
  } catch (err) {
    console.info('Uh oh!', err);
  }
};

const getLocalState = item => {
  try {
    const serializedState = window.localStorage.getItem(item);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
