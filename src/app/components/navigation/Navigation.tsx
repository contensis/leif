import React, { useRef, useState } from 'react';

// Components
import Hamburger from '../hamburger/Hamburger';
import Icon from '../icon/Icon';

// Style
import NavigationStyled from './Navigation.styled';

// Types
import { MenuProps } from './Navigation.d';

import { _generateNavigation } from './utils';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
export interface Props {
  className?: string;
  navigation: any;
  isMenuOpen: boolean;
  hasNavigationTree: boolean;
  _toggleMenu: (val: boolean) => void;
  _toggleSearch: (val: boolean) => void;
}

const Navigation = ({
  className,
  navigation,
  isMenuOpen,
  _toggleMenu,
  _toggleSearch,
  hasNavigationTree,
}: Props) => {
  const ref = useRef();
  _useOnClickOutside(ref, () => _toggleMenu(false));

  const [activeMenu, setActiveMenu] = useState<string>('');
  const [showSecondMenu, setShowSecondMenu] = useState<boolean>(false);

  if (!hasNavigationTree) return false;

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
                setShowSecondMenu(true);
                setActiveMenu(NAVIGATION[menuKey].slug);
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
    <NavigationStyled className={className} showSecondMenu={showSecondMenu}>
      <button
        type="button"
        onClick={() => {
          _toggleSearch(false);
          _toggleMenu(!isMenuOpen);
          setShowSecondMenu(false);
          setActiveMenu('');
        }}
        className="nav__btn-open"
      >
        <Hamburger isToggled={isMenuOpen} />
      </button>
      {isMenuOpen && (
        <div className="nav-menu__wrapper" ref={ref}>
          <button
            type="button"
            onClick={() => {
              _toggleSearch(false);
              _toggleMenu(!isMenuOpen);
              setShowSecondMenu(false);
              setActiveMenu('');
            }}
            className="nav__btn-close"
          >
            <Hamburger isToggled={isMenuOpen} />
          </button>
          <ul className="nav-menu__items nav-menu__level-one">
            <Menu level={1} />
          </ul>
          {showSecondMenu && (
            <ul className="nav-menu__items nav-menu__level-two">
              <li className="nav-menu__back-btn">
                <button
                  type="button"
                  onClick={() => {
                    setShowSecondMenu(false);
                    setActiveMenu('');
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
      )}
    </NavigationStyled>
  );
};

export default Navigation;
