import React, { useRef } from 'react';

// Style
import HeaderStyled from './Header.styled';

// Utils
import FocusLock from 'react-focus-lock';
import Wrapper from '../wrapper/Wrapper';
import { _noScroll } from '../../utils/noScroll';

// Components
import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import HeaderSearch from '../headerSearch/HeaderSearch.container';
import Navigation from '../navigation/Navigation.container';
import BasketMenu from '../basketMenu/BasketMenu.container';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
export interface Props {
  className?: string;
  _toggleSearch: (val: boolean) => void;
  isSearchOpen: boolean;
  isMenuOpen: boolean;
  isBasketOpen: boolean;
  isLight: boolean;
}

const Header = ({
  className,
  _toggleSearch,
  isSearchOpen,
  isMenuOpen,
  isBasketOpen,
  isLight,
}: Props) => {
  const ref = useRef();
  _useOnClickOutside(ref, () => _toggleSearch(false));
  _noScroll(isSearchOpen || isMenuOpen || isBasketOpen);

  return (
    <HeaderStyled
      className={className}
      isSearchOpen={isSearchOpen}
      isLight={isLight}
    >
      <Wrapper
        condition={isSearchOpen}
        wrapper={() => (
          <>
            <FocusLock className="focus-lock" ref={ref}>
              <HeaderSearch className="header__search" />
              <BasketMenu />
              <Navigation />
            </FocusLock>
          </>
        )}
      >
        <a href="/" className="header__logo-link">
          <img
            className="header__logo"
            src={
              isLight
                ? '/static/img/logos/logo-light.svg'
                : '/static/img/logos/logo-dark.svg'
            }
            alt="Leif"
          />
          <VisuallyHidden text="Home" />
        </a>
        <div className="header__actions">
          <IconButton
            className="header__search-icon"
            icon="search"
            text="Search site"
            isToggled={isSearchOpen}
            _func={() => _toggleSearch(!isSearchOpen)}
          />
          <BasketMenu />
          <Navigation />
        </div>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
