import React from 'react';
import { connect } from 'react-redux';
import { toJS } from '../../core/util/ToJs';

// Actions
import { toggleSearch } from '../../core/redux/custom/ui/actions';
import { setSearchTerm } from '../../core/redux/custom/liveSearch/actions';

// Selectors
import { selectIsSearchOpen } from '../../core/redux/custom/ui/selectors';
import { selectSearchResults } from '../../core/redux/custom/liveSearch/selectors';

import HeaderSearch, { Props } from './HeaderSearch';

const HeaderSearchContainer = ({
  className,
  placeholder,
  isSearchOpen = false,
  _toggleSearch,
  _setSearchTerm,
  results,
}: Props) => {
  return (
    <HeaderSearch
      className={className}
      placeholder={placeholder}
      isSearchOpen={isSearchOpen}
      _toggleSearch={_toggleSearch}
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
    _toggleSearch: (val: boolean) => dispatch(toggleSearch(val)),
    _setSearchTerm: (val: string) => dispatch(setSearchTerm(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(HeaderSearchContainer));
