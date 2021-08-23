import React, { useState } from 'react';

// Style
import HeaderSearchStyled from './HeaderSearch.styled';

// Components
import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import SearchCard from '../searchCard/SearchCard';
import Icon from '../icon/Icon';

// Utils
import { isClient } from '../../utils/isClient';
import Link from '../link/Link';

export interface Props {
  className?: string;
  placeholder?: string;
  isSearchOpen?: boolean;
  _setIsSearchOpen: (val: boolean) => void;
  _setSearchTerm: (val: string) => void;
  results?: any;
  term: string;
}

const HeaderSearch = ({
  className,
  placeholder,
  isSearchOpen,
  _setIsSearchOpen,
  _setSearchTerm,
  results,
  term,
}: Props) => {
  const [value, setValue] = useState(term || '');
  const _handleChange = (val: string) => {
    if (!val) return null;
    if (val.length >= 1) {
      setValue(val);
      _setSearchTerm(val);
    }
  };

  const _handleKeyDown = (evt: any) => {
    if (evt.keyCode === 27) {
      _setIsSearchOpen(false);
    }
  };

  const _handleKeyPress = (evt: any) => {
    if (evt.key === 'Enter') window.location.href = `/search?term=${value}`;
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
          defaultValue={term}
          autoComplete="off"
          aria-label="Search site"
          onBlur={(e: any) => _handleChange(e.target.value)}
          onChange={(e: any) => _handleChange(e.target.value)}
          onKeyPress={_handleKeyPress}
        />
        <Link
          className="header-search__site-search--link"
          uri={`/search?term=${value}`}
        >
          <Icon type="search" color="#fff" />
          <VisuallyHidden text={`Search for ${value}`} />
        </Link>
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
        _func={() => _setIsSearchOpen(!isSearchOpen)}
        text={`${isSearchOpen ? 'Close' : 'Open'} Search site`}
      />
    </HeaderSearchStyled>
  );
};

export default HeaderSearch;
