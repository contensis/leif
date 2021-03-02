import React, { useRef } from 'react';

import HeaderSearchStyled from './HeaderSearch.styled';

import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';

export interface Props {
  className?: string;
  placeholder?: string;
  isOpen?: boolean;
  _toggleSearch: (val: boolean) => void;
}

const HeaderSearch = ({
  className,
  placeholder,
  isOpen = false,
  _toggleSearch,
}: Props) => {  
  const ref = useRef();
  _useOnClickOutside(ref, () => _toggleSearch(false));

  return (
    <HeaderSearchStyled className={className} ref={ref}>
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
        icon={isOpen ? 'cross' : 'search'}
        _func={() => _toggleSearch(!isOpen)}
        text={`${isOpen ? 'Close' : 'Open'} Search site`}
      />
    </HeaderSearchStyled>
  );
};

export default HeaderSearch;
