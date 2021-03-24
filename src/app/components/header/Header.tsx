import React, { useRef } from 'react';

import HeaderStyled from './Header.styled';

import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import FocusLock from 'react-focus-lock';
import Wrapper from '../wrapper/Wrapper';
import HeaderSearch from '../headerSearch/HeaderSearch';
import { _noScroll } from '../../utils/noScroll';
import Navigation from '../navigation/Navigation';
import BasketMenu from '../basketMenu/BasketMenu';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
export interface Props {
  className?: string;
  navigation: any;
  _toggleSearch: (val: boolean) => void;
  isSearchOpen: boolean;
  _toggleMenu: (val: boolean) => void;
  isMenuOpen: boolean;
  _toggleBasket: (val: boolean) => void;
  isBasketOpen: boolean;
  isLight: boolean;
  basket: any;
}

const Header = ({
  className,
  isSearchOpen,
  _toggleSearch,
  isMenuOpen,
  _toggleMenu,
  navigation,
  _toggleBasket,
  isBasketOpen,
  isLight,
  basket,
}: Props) => {
  _noScroll(isSearchOpen || isMenuOpen || isBasketOpen);
  const ref = useRef();
  _useOnClickOutside(ref, () => _toggleSearch(false));

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
              <BasketMenu
                isBasketOpen={isBasketOpen}
                _toggleBasket={_toggleBasket}
                _toggleSearch={_toggleSearch}
                basket={basket}
              />
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
                ? '/static/img/logos/logo-light.png'
                : '/static/img/logos/logo-dark.png'
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
          <BasketMenu
            isBasketOpen={isBasketOpen}
            _toggleBasket={_toggleBasket}
            _toggleSearch={_toggleSearch}
            basket={basket}
          />
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
