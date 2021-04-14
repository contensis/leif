import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import {
  setIsSearchOpen,
  setIsBasketOpen,
} from '../../core/redux/custom/ui/actions';
import { toggleMenu } from '../../core/redux/custom/menu/actions';
import { removeFromBasket } from '../../core/redux/custom/basket/actions';

// Selectors
import {
  selectIsSearchOpen,
  selectIsBasketOpen,
} from '../../core/redux/custom/ui/selectors';
import { selectIsMenuOpen } from '../../core/redux/custom/menu/selectors';

import { selectProductsInBasket } from '../../core/redux/custom/basket/selectors';

// Components and Props
import BasketMenu, { Props } from './BasketMenu';

const BasketMenuContainer = ({
  className,
  isBasketOpen,
  _setIsBasketOpen,
  _setIsSearchOpen,
  _removeFromBasket,
  basket,
}: Props) => {
  return (
    <BasketMenu
      className={className}
      isBasketOpen={isBasketOpen}
      _setIsBasketOpen={_setIsBasketOpen}
      _setIsSearchOpen={_setIsSearchOpen}
      _removeFromBasket={_removeFromBasket}
      basket={basket}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isSearchOpen: selectIsSearchOpen(state),
    isMenuOpen: selectIsMenuOpen(state),
    isBasketOpen: selectIsBasketOpen(state),
    basket: selectProductsInBasket(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _setIsSearchOpen: (val: boolean) => dispatch(setIsSearchOpen(val)),
    _toggleMenu: (val: boolean) => dispatch(toggleMenu(val)),
    _setIsBasketOpen: (val: boolean) => dispatch(setIsBasketOpen(val)),
    _removeFromBasket: (id: string, sku: string) =>
      dispatch(removeFromBasket(id, sku)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(BasketMenuContainer));
