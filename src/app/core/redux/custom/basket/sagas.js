import { takeEvery, select, put } from 'redux-saga/effects';
import { selectProductsInBasket } from '../basket/selectors';

import { ADD_TO_BASKET, REMOVE_FROM_BASKET, INITIALISED_BASKET } from './types';
import { ROUTE_WILL_LOAD } from '../../types';

export const BasketSagas = [
  takeEvery(ROUTE_WILL_LOAD, _ensureInitialised),
  takeEvery(ADD_TO_BASKET, _updateLocalStorage),
  takeEvery(REMOVE_FROM_BASKET, _updateLocalStorage),
];

function* _ensureInitialised() {
  if (getLocalState()) {
    yield put({
      type: INITIALISED_BASKET,
      value: getLocalState(),
    });
  } else {
    yield put({ type: INITIALISED_BASKET });
  }
}

function* _updateLocalStorage() {
  const items = yield select(selectProductsInBasket);
  saveLocalState(items);
}

// Local Storage Functions
const saveLocalState = state => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('basket', serializedState);
  } catch (err) {
    console.info('Uh oh!', err);
  }
};

const getLocalState = () => {
  try {
    const serializedState = window.localStorage.getItem('basket');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};
