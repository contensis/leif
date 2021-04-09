import React from 'react';

import HeaderSearchStyled from './HeaderSearch.styled';

import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import SearchCard from '../searchCard/SearchCard';

export interface Props {
  className?: string;
  placeholder?: string;
  isSearchOpen?: boolean;
  _toggleSearch: (val: boolean) => void;
  _setSearchTerm: (val: string) => void;
  results?: any;
}

const HeaderSearch = ({
  className,
  placeholder,
  isSearchOpen,
  _toggleSearch,
  _setSearchTerm,
  results,
}: Props) => {
  const _handleChange = (val: string) => {
    _setSearchTerm(val);
  };

  return (
    <HeaderSearchStyled className={className}>
      <div className="header-search__input-wrapper">
        <VisuallyHidden>
          <label htmlFor="header-search">Search site:</label>
        </VisuallyHidden>
        <input
          className="header-search__input"
          type="search"
          id="header-search"
          name="Header Search"
          placeholder={placeholder}
          aria-label="Search site"
          onChange={(e: any) => _handleChange(e.target.value)}
        />
        {results && results.length >= 1 && (
          <div className="header-search__results">
            {results.map((res: any, idx: number) => (
              <SearchCard key={idx} {...res} />
            ))}
          </div>
        )}
      </div>
      <IconButton
        isToggled={isSearchOpen}
        icon="search"
        _func={() => _toggleSearch(!isSearchOpen)}
        text={`${isSearchOpen ? 'Close' : 'Open'} Search site`}
      />
    </HeaderSearchStyled>
  );
};

export default HeaderSearch;
