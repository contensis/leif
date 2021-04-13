import React, { useState } from 'react';

import HeaderSearchStyled from './HeaderSearch.styled';

import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import SearchCard from '../searchCard/SearchCard';
import Icon from '../icon/Icon';
import { isClient } from '~/utils/isClient';

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
  const [value, setValue] = useState('');
  const _handleChange = (val: string) => {
    setValue(val);
    _setSearchTerm(val);
  };

  const _handleKeyDown = (evt: any) => {
    if (evt.keyCode === 27) {
      _toggleSearch(false);
    }
  };

  if (isClient()) {
    document.addEventListener('keydown', _handleKeyDown);
  }

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
          onBlur={(e: any) => _handleChange(e.target.value)}
        />
        <a
          className="header-search__site-search--link"
          href={`/search?term=${value}`}
        >
          <Icon type="search" color="#fff" />
          <VisuallyHidden text={`Search for ${value}`} />
        </a>
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
