import React, { useRef } from 'react';

import HeaderStyled from './Header.styled';

import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import FocusLock from 'react-focus-lock';
import Wrapper from '../wrapper/Wrapper';
import HeaderSearch from '../headerSearch/HeaderSearch';
import { _noScroll } from '../../utils/noScroll';
import Navigation from '../navigation/Navigation';
import BasketMenu from '../basketMenu/BasketMenu.container';

// Hooks
// import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
export interface Props {
  className?: string;
  navigation: any;
  _toggleSearch: (val: boolean) => void;
  isSearchOpen: boolean;
  _toggleMenu: (val: boolean) => void;
  isMenuOpen: boolean;
  isBasketOpen: boolean;
  isLight: boolean;
}

const Header = ({
  className,
  isSearchOpen,
  _toggleSearch,
  isMenuOpen,
  _toggleMenu,
  navigation,
  isBasketOpen,
  isLight,
}: Props) => {
  _noScroll(isSearchOpen || isMenuOpen || isBasketOpen);
  const ref = useRef();

  return (
    <HeaderStyled
      className={className}
      isSearchOpen={isSearchOpen}
      ref={ref}
      isLight={isLight}
    >
      <Wrapper
        condition={isSearchOpen}
        wrapper={() => (
          <>
            <FocusLock className="focus-lock">
              <HeaderSearch
                className="header__search"
                isSearchOpen={isSearchOpen}
                _toggleSearch={_toggleSearch}
              />
              <BasketMenu />
              <Navigation
                isMenuOpen={isMenuOpen}
                _toggleMenu={_toggleMenu}
                navigation={navigation}
                _toggleSearch={_toggleSearch}
              />
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
          <Navigation
            isMenuOpen={isMenuOpen}
            _toggleMenu={_toggleMenu}
            navigation={navigation}
            _toggleSearch={_toggleSearch}
          />
        </div>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
