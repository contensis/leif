import React, { useRef, useState } from 'react';
import Hamburger from '../hamburger/Hamburger';
import Icon from '../icon/Icon';

import NavigationStyled from './Navigation.styled';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
export interface Props {
  className?: string;
  navigation: any;
  isMenuOpen: boolean;
  _toggleMenu: (val: boolean) => void;
  _toggleSearch: (val: boolean) => void;
}

interface MenuProps {
  level?: number;
}

const Navigation = ({
  className,
  navigation,
  isMenuOpen,
  _toggleMenu,
  _toggleSearch,
}: Props) => {
  const ref = useRef();
  _useOnClickOutside(ref, () => _toggleMenu(false));

  const [activeMenu, setActiveMenu] = useState<string>('');
  const [showSecondMenu, setShowSecondMenu] = useState<boolean>(false);

  const Menu = ({ level = 1 }: MenuProps) => {
    const NAVIGATION =
      level === 1
        ? navigation[`level_${level}`]
        : navigation[`level_${level}`][activeMenu];

    const MENU = Object.keys(NAVIGATION).map(menuKey => {
      const isActiveItem = NAVIGATION[menuKey].slug === activeMenu;
      if (NAVIGATION[menuKey].showChildren) {
        return (
          <li key={NAVIGATION[menuKey].slug}>
            <button
              className={`nav-menu__item ${
                isActiveItem
                  ? 'nav-menu__item--active'
                  : 'nav-menu__item--not-active'
              }`}
              onClick={() => {
                setShowSecondMenu(true);
                setActiveMenu(NAVIGATION[menuKey].slug);
              }}
            >
              {NAVIGATION[menuKey].displayName}
              <Icon type="arrowRight" />
            </button>
          </li>
        );
      }
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
    <NavigationStyled
      className={className}
      showSecondMenu={showSecondMenu}
      ref={ref}
    >
      <button
        type="button"
        onClick={() => {
          _toggleSearch(false);
          _toggleMenu(!isMenuOpen);
          setShowSecondMenu(false);
          setActiveMenu('');
        }}
        className="nav__btn"
      >
        <Hamburger isToggled={isMenuOpen} />
      </button>
      {isMenuOpen && (
        <div className="nav-menu__wrapper">
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
                  <Icon type="arrowLeft" />
                </button>
              </li>
              <Menu level={2} />
            </ul>
          )}
        </div>
      )}
    </NavigationStyled>
  );
};

export default Navigation;
