import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

import { toggleSearch, toggleMenu } from '../../core/redux/custom/ui/actions';
import {
  selectIsSearchOpen,
  selectIsMenuOpen,
} from '../../core/redux/custom/ui/selectors';

import Header, { Props } from './Header';

const HeaderContainer = ({
  className,
  isSearchOpen,
  _toggleSearch,
  isMenuOpen,
  _toggleMenu,
  navigation,
}: Props) => {
  return (
    <Header
      className={className}
      isSearchOpen={isSearchOpen}
      _toggleSearch={_toggleSearch}
      isMenuOpen={isMenuOpen}
      _toggleMenu={_toggleMenu}
      navigation={navigation}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isSearchOpen: selectIsSearchOpen(state),
    isMenuOpen: selectIsMenuOpen(state),
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
