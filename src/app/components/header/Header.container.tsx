import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

import { toggleSearch } from '../../core/redux/custom/ui/actions';
import { selectIsSearchOpen } from '../../core/redux/custom/ui/selectors';

import Header, { Props } from './Header';

const HeaderContainer = ({ className, isSearchOpen, _toggleSearch }: Props) => {
  return (
    <Header
      className={className}
      isSearchOpen={isSearchOpen}
      _toggleSearch={_toggleSearch}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isSearchOpen: selectIsSearchOpen(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _toggleSearch: (val: boolean) => dispatch(toggleSearch(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HeaderContainer));
