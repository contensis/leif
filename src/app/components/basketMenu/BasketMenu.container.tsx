import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import {
  toggleSearch,
  toggleMenu,
  toggleBasket,
} from '../../core/redux/custom/ui/actions';
import { removeFromBasket } from '../../core/redux/custom/basket/actions';

// Selectors
import {
  selectIsSearchOpen,
  selectIsMenuOpen,
  selectIsBasketOpen,
} from '../../core/redux/custom/ui/selectors';
import { selectProductsInBasket } from '../../core/redux/custom/basket/selectors';

// Components and Props
import BasketMenu, { Props } from './BasketMenu';

const BasketMenuContainer = ({
  className,
  isBasketOpen,
  _toggleBasket,
  _toggleSearch,
  _removeFromBasket,
  basket,
}: Props) => {
  return (
    <BasketMenu
      className={className}
      isBasketOpen={isBasketOpen}
      _toggleBasket={_toggleBasket}
      _toggleSearch={_toggleSearch}
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
    _toggleSearch: (val: boolean) => dispatch(toggleSearch(val)),
    _toggleMenu: (val: boolean) => dispatch(toggleMenu(val)),
    _toggleBasket: (val: boolean) => dispatch(toggleBasket(val)),
    _removeFromBasket: (id: string, sku: string) =>
      dispatch(removeFromBasket(id, sku)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(BasketMenuContainer));
