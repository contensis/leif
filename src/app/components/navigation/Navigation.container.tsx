import React from 'react';

// Redux
import { connect } from 'react-redux';

// Utils
import { toJS } from '../../core/util/ToJs';

// Actions
import { toggleSearch, toggleMenu } from '../../core/redux/custom/ui/actions';

//  Selectors
import { selectIsMenuOpen } from '../../core/redux/custom/ui/selectors';
import { selectNavigationRootChildren } from '../../core/redux/custom/routing/selectors';
import { hasNavigationTree } from '../../core/redux/selectors';

// Component & Props
import Navigation, { Props } from './Navigation';

const NavigationContainer = ({
  className,
  _toggleSearch,
  isMenuOpen,
  _toggleMenu,
  navigation,
  hasNavigationTree,
}: Props) => {
  return (
    <Navigation
      className={className}
      navigation={navigation}
      isMenuOpen={isMenuOpen}
      _toggleMenu={_toggleMenu}
      _toggleSearch={_toggleSearch}
      hasNavigationTree={hasNavigationTree}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isMenuOpen: selectIsMenuOpen(state),
    navigation: selectNavigationRootChildren(state),
    hasNavigationTree: hasNavigationTree(state),
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
)(toJS(NavigationContainer));
