import React from 'react';

// Redux
import { connect } from 'react-redux';

// Utils
import { toJS } from '../../core/util/ToJs';

// Actions
import {
  toggleMenu,
  toggleSecondMenu,
} from '../../core/redux/custom/menu/actions';

//  Selectors
import {
  selectIsMenuOpen,
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
  isMenuOpen,
  isSecondMenuOpen,
  _toggleMenu,
  _toggleSecondMenu,
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(NavigationContainer));
