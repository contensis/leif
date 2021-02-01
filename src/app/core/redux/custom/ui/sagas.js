import { takeEvery, call, select, put } from 'redux-saga/effects';

import { selectShowSearch } from '~/core/redux/custom/ui/selectors';

import { ROUTE_WILL_LOAD } from '../../types';

import { TOGGLE_SEARCH, SET_SCREEN_SIZE, BROWSER_RESIZE } from './types';

export const UISagas = [
  takeEvery(ROUTE_WILL_LOAD, handleUIState),
  takeEvery(BROWSER_RESIZE, getDeviceType),
];

function* handleUIState() {
  const searchVisible = yield select(selectShowSearch);
  if (searchVisible) {
    yield call(closeSearch);
  }
  //always triggered
  yield call(getDeviceType);
}

function* closeSearch() {
  yield put({
    type: TOGGLE_SEARCH,
    value: false,
  });
}

function* getDeviceType() {
  if (typeof window !== 'undefined') {
    //check for visualViewport support (Firefox)
    const visualViewportSupported =
      window && typeof window.visualViewport !== 'undefined' ? true : false;
    if (visualViewportSupported) {
      yield put({
        type: SET_SCREEN_SIZE,
        value: window.visualViewport.width,
      });
    } else {
      yield put({
        type: SET_SCREEN_SIZE,
        value: window.innerWidth,
      });
    }
  }
}
