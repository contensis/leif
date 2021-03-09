import React from 'react';

import HeaderSearchStyled from './HeaderSearch.styled';

import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

export interface Props {
  className?: string;
  placeholder?: string;
  isSearchOpen?: boolean;
  _toggleSearch: (val: boolean) => void;
}

const HeaderSearch = ({
  className,
  placeholder,
  isSearchOpen = false,
  _toggleSearch,
}: Props) => {  

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
        />
      </div>
      <IconButton
        isToggled={isSearchOpen}
        icon='search'
        _func={() => _toggleSearch(!isSearchOpen)}
        text={`${isSearchOpen ? 'Close' : 'Open'} Search site`}
      />
    </HeaderSearchStyled>
  );
};

export default HeaderSearch;
