import React, { useRef, useEffect } from 'react';

// Style
import HeaderStyled from './Header.styled';

// Utils
import FocusLock from 'react-focus-lock';
import Wrapper from '../wrapper/Wrapper';
import { addOverlayCSS, removeOverlayCSS } from '../../utils/addOverlayCSS';

// Components
import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import HeaderSearch from '../headerSearch/HeaderSearch.container';
import Navigation from '../navigation/Navigation.container';
import BasketMenu from '../basketMenu/BasketMenu.container';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import { _useLockBodyScroll } from '../../utils/hooks/useLockBodyScroll';
import Link from '../link/Link';
export interface Props {
  className?: string;
  _setIsSearchOpen: (val: boolean) => void;
  isSearchOpen: boolean;
  isMenuOpen: boolean;
  isBasketOpen: boolean;
  isLight: boolean;
}

interface SearchOpenHeaderProps {
  _setIsSearchOpen: (val: boolean) => void;
}

const SearchOpenHeader = ({ _setIsSearchOpen }: SearchOpenHeaderProps) => {
  _useLockBodyScroll();
  const ref = useRef();
  _useOnClickOutside(ref, () => _setIsSearchOpen(false));
  return (
    <div ref={ref} className="header__search--wrapper">
      <HeaderSearch className="header__search" />
      <BasketMenu />
      <Navigation />
    </div>
  );
};

const Header = ({
  className,
  _setIsSearchOpen,
  isSearchOpen,
  isLight,
}: Props) => {
  useEffect(() => {
    if (isSearchOpen) addOverlayCSS();
    else removeOverlayCSS();
  }, [isSearchOpen]);
  return (
    <HeaderStyled
      className={className}
      isSearchOpen={isSearchOpen}
      isLight={isLight}
    >
      <Wrapper
        condition={isSearchOpen}
        wrapper={(children: any) => (
          <>
            {children}
            <FocusLock>
              <SearchOpenHeader _setIsSearchOpen={_setIsSearchOpen} />
            </FocusLock>
          </>
        )}
      >
        <Link uri="/" title="Leif Home" className="header__logo-link">
          <img
            className="header__logo"
            src={
              isLight
                ? '/static/img/logos/logo-light.svg'
                : '/static/img/logos/logo-dark.svg'
            }
            alt="Leif"
            width="160"
            height="72"
          />
          <VisuallyHidden text="Home" />
        </Link>
        {!isSearchOpen && (
          <div className="header__actions">
            <IconButton
              className="header__search-icon"
              icon="search"
              text="Search site"
              isToggled={isSearchOpen}
              _func={() => _setIsSearchOpen(!isSearchOpen)}
            />
            <BasketMenu />
            <Navigation />
          </div>
        )}
      </Wrapper>
    </HeaderStyled>
  );
};

export default Header;
