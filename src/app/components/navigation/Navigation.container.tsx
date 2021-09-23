import React from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import { toggleMenu, toggleSecondMenu } from '~/redux/menu/actions';

//  Selectors
import {
  selectIsMenuOpen,
  selectIsSecondMenuOpen,
} from '~/redux/menu/selectors';
import { selectNavigationRootChildren } from '~/redux/routing/selectors';
import { hasNavigationTree } from '../../core/redux/selectors';

// Component & Props
import Navigation, { Props } from './Navigation';
import { setIsSearchOpen } from '~/redux/ui/actions';

const NavigationContainer = ({
  className,
  navigation,
  hasNavigationTree,
  isMenuOpen,
  isSecondMenuOpen,
  _toggleMenu,
  _toggleSecondMenu,
  _setIsSearchOpen,
}: Props) => {
  return (
    <Navigation
      className={className}
      navigation={navigation}
      hasNavigationTree={hasNavigationTree}
      isMenuOpen={isMenuOpen}
      isSecondMenuOpen={isSecondMenuOpen}
      _toggleMenu={_toggleMenu}
      _toggleSecondMenu={_toggleSecondMenu}
      _setIsSearchOpen={_setIsSearchOpen}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    navigation: selectNavigationRootChildren(state),
    hasNavigationTree: hasNavigationTree(state),
    isMenuOpen: selectIsMenuOpen(state),
    isSecondMenuOpen: selectIsSecondMenuOpen(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _toggleMenu: (val: boolean) => dispatch(toggleMenu(val)),
    _toggleSecondMenu: (val: boolean) => dispatch(toggleSecondMenu(val)),
    _setIsSearchOpen: (val: boolean) => dispatch(setIsSearchOpen(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
