import React from 'react';

import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import SearchInputStyled from './SearchInput.styled';

export interface Props {
  className?: string;
  placeholder?: string;
}

const SearchInput = ({ className, placeholder = "Search" }: Props) => {
  return (
    <SearchInputStyled className={className}>
      <VisuallyHidden>
        <label htmlFor="search">Search the site:</label>
      </VisuallyHidden>
      <input
        type="search"
        id="search"
        name="search"
        className="search-input__input"
        aria-label="Search"
        placeholder={placeholder}
      />
      <button type="submit" className="search-input__btn">
        <VisuallyHidden text="search" />
        <Icon type="search" />
      </button>
    </SearchInputStyled>
  );
};

export default SearchInput;
