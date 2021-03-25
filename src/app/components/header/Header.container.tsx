import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

import {
  toggleSearch,
  toggleMenu,
  toggleBasket,
} from '../../core/redux/custom/ui/actions';
import {
  selectIsSearchOpen,
  selectIsMenuOpen,
  selectIsBasketOpen,
} from '../../core/redux/custom/ui/selectors';
import { selectProductsInBasket } from '../../core/redux/custom/basket/selectors';

import Header, { Props } from './Header';

const HeaderContainer = ({
  className,
  isSearchOpen,
  _toggleSearch,
  isMenuOpen,
  _toggleMenu,
  navigation,
  _toggleBasket,
  isBasketOpen,
  isLight,
  basket,
}: Props) => {
  return (
    <Header
      className={className}
      isSearchOpen={isSearchOpen}
      _toggleSearch={_toggleSearch}
      isMenuOpen={isMenuOpen}
      _toggleMenu={_toggleMenu}
      navigation={navigation}
      _toggleBasket={_toggleBasket}
      isBasketOpen={isBasketOpen}
      isLight={isLight}
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HeaderContainer));
