import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import { setIsSearchOpen } from '../../core/redux/custom/ui/actions';
import { setSearchTerm } from '../../core/redux/custom/liveSearch/actions';

// Selectors
import { selectIsSearchOpen } from '../../core/redux/custom/ui/selectors';
import { selectSearchResults } from '../../core/redux/custom/liveSearch/selectors';

import HeaderSearch, { Props } from './HeaderSearch';

const HeaderSearchContainer = ({
  className,
  placeholder,
  isSearchOpen = false,
  _setIsSearchOpen,
  _setSearchTerm,
  results,
}: Props) => {
  return (
    <HeaderSearch
      className={className}
      placeholder={placeholder}
      isSearchOpen={isSearchOpen}
      _setIsSearchOpen={_setIsSearchOpen}
      _setSearchTerm={_setSearchTerm}
      results={results}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isSearchOpen: selectIsSearchOpen(state),
    results: selectSearchResults(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    _setIsSearchOpen: (val: boolean) => dispatch(setIsSearchOpen(val)),
    _setSearchTerm: (val: string) => dispatch(setSearchTerm(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HeaderSearchContainer));
