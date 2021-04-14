import React, { useEffect, useRef } from 'react';

// Components
import Hamburger from '../hamburger/Hamburger';
import Icon from '../icon/Icon';

// Style
import NavigationStyled from './Navigation.styled';

// Types
import { MenuProps } from './Navigation.d';

// Utils
import FocusLock from 'react-focus-lock';
import { _generateNavigation } from './utils';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import { _useLockBodyScroll } from '../../utils/hooks/useLockBodyScroll';
import { isClient } from '../../utils/isClient';
import { addOverlayCSS, removeOverlayCSS } from '../../utils/addOverlayCSS';
export interface Props {
  className?: string;
  navigation: any;
  isMenuOpen: boolean;
  isSecondMenuOpen: boolean;
  hasNavigationTree: boolean;
  activeMenu: string;
  _toggleMenu: (val: boolean) => void;
  _setIsSearchOpen: (val: boolean) => void;
  _setActiveMenu: (val: string) => void;
  _toggleSecondMenu: (val: boolean) => void;
}

const NavigationSidebar = ({
  navigation,
  isMenuOpen,
  isSecondMenuOpen,
  hasNavigationTree,
  activeMenu,
  _toggleMenu,
  _setIsSearchOpen,
  _setActiveMenu,
  _toggleSecondMenu,
}: Props) => {
  const ref = useRef();
  _useOnClickOutside(ref, () => _toggleMenu(false));
  _useLockBodyScroll();

  const _handleKeyDown = (evt: any) => {
    if (evt.keyCode === 27) {
      _toggleMenu(false);
    }
  };

  if (isClient()) {
    document.addEventListener('keydown', _handleKeyDown);
  }

  if (!hasNavigationTree) return null;

  // Generates a more human readable navigation object
  const navObject: any = _generateNavigation(navigation);

  // Generates the <Menu /> component
  const Menu = ({ level = 1 }: MenuProps) => {
    const NAVIGATION: any =
      level === 1
        ? navObject[`level_${level}`]
        : navObject[`level_${level}`][activeMenu];

    const MENU = Object.keys(NAVIGATION).map(menuKey => {
      const isActiveItem = NAVIGATION[menuKey].slug === activeMenu;

      if (NAVIGATION[menuKey].showChildren) {
        return (
          <li key={NAVIGATION[menuKey].slug}>
            <button
              className={`nav-menu__item ${
                isActiveItem ? 'active' : 'not-active'
              }`}
              onClick={() => {
                _toggleSecondMenu(true);
                _setActiveMenu(NAVIGATION[menuKey].slug);
              }}
            >
              {NAVIGATION[menuKey].displayName}
              <Icon type="arrow-right" color="#77E8C6" />
            </button>
          </li>
        );
      }
      // Single item with no children.
      return (
        <li key={NAVIGATION[menuKey].slug}>
          <a href={NAVIGATION[menuKey].path} className="nav-menu__item">
            {NAVIGATION[menuKey].displayName}
          </a>
        </li>
      );
    });
    return <>{MENU}</>;
  };

  return (
    <FocusLock>
      <div className="nav-menu__wrapper" ref={ref}>
        <button
          type="button"
          onClick={() => {
            _setIsSearchOpen(false);
            _toggleMenu(!isMenuOpen);
            _toggleSecondMenu(false);
            _setActiveMenu('');
          }}
          className="nav__btn-close"
        >
          <Hamburger isToggled={isMenuOpen} />
        </button>
        <ul className="nav-menu__items nav-menu__level-one">
          <Menu level={1} />
        </ul>
        {isSecondMenuOpen && (
          <ul className="nav-menu__items nav-menu__level-two">
            <li className="nav-menu__back-btn">
              <button
                type="button"
                onClick={() => {
                  _toggleSecondMenu(false);
                  _setActiveMenu('');
                }}
              >
                <Icon type="arrow-left" />
              </button>
            </li>
            <Menu level={2} />
          </ul>
        )}
        <div className="nav__socials">
          <a href="https://en-gb.facebook.com/">
            <Icon type="facebook" color="#C3C6DE" />
          </a>
          <a href="https://twitter.com/">
            <Icon type="twitter" color="#C3C6DE" />
          </a>
          <a href="https://uk.linkedin.com/">
            <Icon type="linkedin" color="#C3C6DE" />
          </a>
        </div>
      </div>
    </FocusLock>
  );
};

const Navigation = ({
  className,
  navigation,
  isMenuOpen,
  isSecondMenuOpen,
  _toggleMenu,
  _setIsSearchOpen,
  hasNavigationTree,
  activeMenu,
  _setActiveMenu,
  _toggleSecondMenu,
}: Props) => {
  useEffect(() => {
    if (isMenuOpen) addOverlayCSS();
    else removeOverlayCSS();
  }, [isMenuOpen]);

  return (
    <NavigationStyled className={className} isSecondMenuOpen={isSecondMenuOpen}>
      <button
        type="button"
        onClick={() => {
          _setIsSearchOpen(false);
          _toggleMenu(!isMenuOpen);
          _toggleSecondMenu(false);
          _setActiveMenu('');
        }}
        className="nav__btn-open"
      >
        <Hamburger isToggled={isMenuOpen} />
      </button>
      {isMenuOpen && (
        <NavigationSidebar
          navigation={navigation}
          isMenuOpen={isMenuOpen}
          isSecondMenuOpen={isSecondMenuOpen}
          hasNavigationTree={hasNavigationTree}
          activeMenu={activeMenu}
          _toggleMenu={_toggleMenu}
          _setIsSearchOpen={_setIsSearchOpen}
          _setActiveMenu={_setActiveMenu}
          _toggleSecondMenu={_toggleSecondMenu}
        />
      )}
    </NavigationStyled>
  );
};

export default Navigation;
