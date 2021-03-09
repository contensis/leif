import { Map } from 'immutable';
import {
  TOGGLE_SEARCH,
  TOGGLE_MENU,
  TOGGLE_BASKET,
  SET_DEVICE_TYPE,
  SET_SCREEN_SIZE,
} from './types';

let initialState = Map({
  screenSize: null,
  device: null,
  showSearch: false,
  showMenu: false,
  showBasket: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return state.setIn(['showSearch'], action.value);
    case TOGGLE_MENU:
      return state.setIn(['showMenu'], action.value);
    case TOGGLE_BASKET:
      return state.setIn(['showBasket'], action.value);
    case SET_DEVICE_TYPE:
      return state.setIn(['device'], action.value);
    case SET_SCREEN_SIZE:
      return state.set('screenSize', action.value);
    default:
      return state;
  }
};
