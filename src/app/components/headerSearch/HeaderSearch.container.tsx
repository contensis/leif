import React from 'react';
import { connect } from 'react-redux';

// Actions
import { setIsSearchOpen } from '~/redux/ui/actions';
import { setSearchTerm } from '~/redux/liveSearch/actions';

// Selectors
import { selectIsSearchOpen } from '~/redux/ui/selectors';
import {
  selectSearchResults,
  selectSearchTerm,
} from '~/redux/liveSearch/selectors';

import HeaderSearch, { Props } from './HeaderSearch';

const HeaderSearchContainer = ({
  className,
  placeholder,
  isSearchOpen = false,
  _setIsSearchOpen,
  _setSearchTerm,
  results,
  term,
}: Props) => {
  return (
    <HeaderSearch
      className={className}
      placeholder={placeholder}
      isSearchOpen={isSearchOpen}
      _setIsSearchOpen={_setIsSearchOpen}
      _setSearchTerm={_setSearchTerm}
      results={results}
      term={term}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isSearchOpen: selectIsSearchOpen(state),
    results: selectSearchResults(state),
    term: selectSearchTerm(state),
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
)(HeaderSearchContainer);
