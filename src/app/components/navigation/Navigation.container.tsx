import React from 'react';

// Redux
import { connect } from 'react-redux';

// Utils
import { toJS } from '../../core/util/ToJs';

// Actions
import { setIsSearchOpen } from '../../core/redux/custom/ui/actions';
import {
  toggleMenu,
  toggleSecondMenu,
  setActiveMenu,
} from '../../core/redux/custom/menu/actions';

//  Selectors
import {
  selectIsMenuOpen,
  selectActiveMenu,
  selectIsSecondMenuOpen,
} from '../../core/redux/custom/menu/selectors';
import { selectNavigationRootChildren } from '../../core/redux/custom/routing/selectors';
import { hasNavigationTree } from '../../core/redux/selectors';

// Component & Props
import Navigation, { Props } from './Navigation';

const NavigationContainer = ({
  className,
  navigation,
  hasNavigationTree,
  activeMenu,
  isMenuOpen,
  isSecondMenuOpen,
  _toggleMenu,
  _setIsSearchOpen,
  _toggleSecondMenu,
  _setActiveMenu,
}: Props) => {
  return (
    <Navigation
      className={className}
      navigation={navigation}
      hasNavigationTree={hasNavigationTree}
      activeMenu={activeMenu}
      isMenuOpen={isMenuOpen}
      isSecondMenuOpen={isSecondMenuOpen}
      _toggleMenu={_toggleMenu}
      _setIsSearchOpen={_setIsSearchOpen}
      _toggleSecondMenu={_toggleSecondMenu}
      _setActiveMenu={_setActiveMenu}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    navigation: selectNavigationRootChildren(state),
    hasNavigationTree: hasNavigationTree(state),
    activeMenu: selectActiveMenu(state),
    isMenuOpen: selectIsMenuOpen(state),
    isSecondMenuOpen: selectIsSecondMenuOpen(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _setIsSearchOpen: (val: boolean) => dispatch(setIsSearchOpen(val)),
    _toggleMenu: (val: boolean) => dispatch(toggleMenu(val)),
    _toggleSecondMenu: (val: boolean) => dispatch(toggleSecondMenu(val)),
    _setActiveMenu: (val: string) => dispatch(setActiveMenu(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(NavigationContainer));
