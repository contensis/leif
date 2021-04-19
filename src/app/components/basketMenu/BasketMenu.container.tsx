import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import { setIsBasketOpen } from '../../core/redux/custom/ui/actions';
import { removeFromBasket } from '../../core/redux/custom/basket/actions';

// Selectors
import { selectIsBasketOpen } from '../../core/redux/custom/ui/selectors';

import { selectProductsInBasket } from '../../core/redux/custom/basket/selectors';

// Components and Props
import BasketMenu, { Props } from './BasketMenu';

const BasketMenuContainer = ({
  className,
  isBasketOpen,
  _setIsBasketOpen,
  _removeFromBasket,
  basket,
}: Props) => {
  return (
    <BasketMenu
      className={className}
      isBasketOpen={isBasketOpen}
      _setIsBasketOpen={_setIsBasketOpen}
      _removeFromBasket={_removeFromBasket}
      basket={basket}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isBasketOpen: selectIsBasketOpen(state),
    basket: selectProductsInBasket(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _setIsBasketOpen: (val: boolean) => dispatch(setIsBasketOpen(val)),
    _removeFromBasket: (id: string, sku: string) =>
      dispatch(removeFromBasket(id, sku)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(BasketMenuContainer));
