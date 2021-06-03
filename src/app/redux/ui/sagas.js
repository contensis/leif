import { takeEvery, call, select, put } from 'redux-saga/effects';

import { selectIsSearchOpen } from './selectors';

import { ROUTE_WILL_LOAD } from '~/core/redux/types';

import { TOGGLE_SEARCH, SET_SCREEN_SIZE, BROWSER_RESIZE } from './types';

export const UISagas = [
  takeEvery(ROUTE_WILL_LOAD, handleUIState),
  takeEvery(BROWSER_RESIZE, getDeviceType),
];

function* handleUIState() {
  const iaSearchVisible = yield select(selectIsSearchOpen);
  if (iaSearchVisible) {
    yield call(setIsSearchOpen);
  }
  yield call(getDeviceType);
}

function* setIsSearchOpen() {
  yield put({
    type: TOGGLE_SEARCH,
    value: false,
  });
}

function* getDeviceType() {
  if (typeof window !== 'undefined') {
    // Check for visualViewport support (Firefox)
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
