import React from 'react';

import HeaderStyled from './Header.styled';

import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import FocusLock from 'react-focus-lock';
import Wrapper from '../wrapper/Wrapper';
import HeaderSearch from '../headerSearch/HeaderSearch';
import { _noScroll } from '../../utils/noScroll';
import Navigation from '../navigation/Navigation';
export interface Props {
  className?: string;
  navigation: any;
  _toggleSearch: (val: boolean) => void;
  isSearchOpen: boolean;
  _toggleMenu: (val: boolean) => void;
  isMenuOpen: boolean;
}

const Header = ({
  className,
  isSearchOpen,
  _toggleSearch,
  isMenuOpen,
  _toggleMenu,
  navigation,
}: Props) => {
  _noScroll(isSearchOpen || isMenuOpen);

  return (
    <HeaderStyled className={className} isSearchOpen={isSearchOpen}>
      <Wrapper
        condition={isSearchOpen}
        wrapper={(children: any) => (
          <>
            {children}
            <FocusLock className="focus-lock">
              <HeaderSearch
                className="header__search"
                isSearchOpen={isSearchOpen}
                _toggleSearch={_toggleSearch}
              />
            </FocusLock>
          </>
        )}
      >
        <a href="/" className="header__logo-link">
          <img
            className="header__logo"
            src="/static/img/logos/logo-dark.png"
            alt="Leif"
          />
          <VisuallyHidden text="Home" />
        </a>
        <div className="header__actions">
          <IconButton
            className="header__search-icon"
            icon="search"
            text="Search site"
            _func={() => _toggleSearch(!isSearchOpen)}
          />
          <IconButton icon="pot" text="Basket" />
          <Navigation
            isMenuOpen={isMenuOpen}
            _toggleMenu={_toggleMenu}
            navigation={navigation}
          />
        </div>
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
