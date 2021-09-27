import React from 'react';
import { connect } from 'react-redux';

// Actions
import { setIsBasketOpen, setIsSearchOpen } from '~/redux/ui/actions';

// Selectors
import { selectIsBasketOpen } from '~/redux/ui/selectors';

import {
  selectProductsInBasket,
  selectTotalProductsInBasket,
} from '~/redux/basket/selectors';

// Components and Props
import BasketMenu, { Props } from './BasketMenu';

const BasketMenuContainer = ({
  className,
  isBasketOpen,
  _setIsBasketOpen,
  _setIsSearchOpen,
  basket,
  totalItems,
}: Props) => {
  return (
    <BasketMenu
      className={className}
      _setIsSearchOpen={_setIsSearchOpen}
      isBasketOpen={isBasketOpen}
      _setIsBasketOpen={_setIsBasketOpen}
      basket={basket}
      totalItems={totalItems}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isBasketOpen: selectIsBasketOpen(state),
    basket: selectProductsInBasket(state),
    totalItems: selectTotalProductsInBasket(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _setIsBasketOpen: (val: boolean) => dispatch(setIsBasketOpen(val)),
    _setIsSearchOpen: (val: boolean) => dispatch(setIsSearchOpen(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketMenuContainer);
