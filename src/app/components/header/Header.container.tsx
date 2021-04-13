import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import { toggleSearch, toggleMenu } from '../../core/redux/custom/ui/actions';

// Selectors
import {
  selectIsSearchOpen,
  selectIsMenuOpen,
  selectIsBasketOpen,
} from '../../core/redux/custom/ui/selectors';

import Header, { Props } from './Header';

const HeaderContainer = ({
  className,
  _toggleSearch,
  isSearchOpen,
  isMenuOpen,
  isBasketOpen,
  isLight,
}: Props) => {
  return (
    <Header
      className={className}
      _toggleSearch={_toggleSearch}
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
    _toggleSearch: (val: boolean) => dispatch(toggleSearch(val)),
    _toggleMenu: (val: boolean) => dispatch(toggleMenu(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HeaderContainer));
