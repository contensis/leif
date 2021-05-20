import React, { useEffect, useState } from 'react';

import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import SearchInputStyled from './SearchInput.styled';

export interface Props {
  className?: string;
  placeholder?: string;
  searchTerm: string;
  _func?: (ev: any) => void;
}

const SearchInput = ({
  className,
  searchTerm = '',
  _func,
  placeholder = 'Search',
}: Props) => {
  const [stateValue, setStateValue] = useState<string>('');
  useEffect(() => setStateValue(searchTerm || ''), [searchTerm]);

  const _handleSubmit = (evt: any) => {
    if (evt) evt.preventDefault();
    if (_func) _func(stateValue);
  };

  const _handleChange = (evt: any) => {
    setStateValue(evt.target.value);
  };

  const _handleKeyPress = (evt: any) => {
    if (evt.key === 'Enter') _handleSubmit(evt);
  };

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
        autoComplete="off"
        value={stateValue}
        onChange={_handleChange}
        onKeyPress={_handleKeyPress}
      />
      <button
        type="submit"
        className="search-input__btn"
        onClick={_handleSubmit}
      >
        <VisuallyHidden text="search" />
        <Icon type="search" />
      </button>
    </SearchInputStyled>
  );
};

export default SearchInput;
