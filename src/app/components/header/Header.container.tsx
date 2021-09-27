import React from 'react';
import { connect } from 'react-redux';

// Actions
import { setIsSearchOpen } from '~/redux/ui/actions';
import { toggleMenu } from '~/redux/menu/actions';

// Selectors
import { selectIsSearchOpen, selectIsBasketOpen } from '~/redux/ui/selectors';
import { selectIsMenuOpen } from '~/redux/menu/selectors';

import Header, { Props } from './Header';

const HeaderContainer = ({
  className,
  _setIsSearchOpen,
  isSearchOpen,
  isMenuOpen,
  isBasketOpen,
  isLight,
}: Props) => {
  return (
    <Header
      className={className}
      _setIsSearchOpen={_setIsSearchOpen}
      isSearchOpen={isSearchOpen}
      isMenuOpen={isMenuOpen}
      isBasketOpen={isBasketOpen}
      isLight={isLight}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isSearchOpen: selectIsSearchOpen(state),
    isMenuOpen: selectIsMenuOpen(state),
    isBasketOpen: selectIsBasketOpen(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _setIsSearchOpen: (val: boolean) => dispatch(setIsSearchOpen(val)),
    _toggleMenu: (val: boolean) => dispatch(toggleMenu(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
