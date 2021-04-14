import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import { setIsSearchOpen } from '../../core/redux/custom/ui/actions';
import { toggleMenu } from '../../core/redux/custom/menu/actions';

// Selectors
import {
  selectIsSearchOpen,
  selectIsBasketOpen,
} from '../../core/redux/custom/ui/selectors';
import { selectIsMenuOpen } from '../../core/redux/custom/menu/selectors';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HeaderContainer));
