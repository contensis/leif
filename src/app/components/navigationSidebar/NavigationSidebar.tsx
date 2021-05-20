import React, { useEffect, useRef, useState } from 'react';

// Components
import Icon from '../icon/Icon';

// Utils
import FocusLock from 'react-focus-lock';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import { _useLockBodyScroll } from '../../utils/hooks/useLockBodyScroll';
import { isClient } from '../../utils/isClient';

// Types
import { NavigationProps } from './Navigation.d';
import NavigationSidebarStyled from './NavigationSidebar.styled';

interface NavigationSidebarProps {
  navigation: any;
  _toggleMenu: (val: boolean) => void;
  _toggleSecondMenu: (val: boolean) => void;
  isSecondMenuOpen: boolean;
}

const NavigationSidebar = ({
  navigation,
  _toggleMenu,
  _toggleSecondMenu,
  isSecondMenuOpen,
}: NavigationSidebarProps) => {
  const ref = useRef();
  _useOnClickOutside(ref, () => _toggleMenu(false));
  _useLockBodyScroll();

  const [activeNavigationSlug, setActiveNavigationSlug] = useState<string>('');
  const [activeNavigationObject, setActiveNavigationObject] = useState<any>();

  const _handleKeyDown = (evt: any) => {
    if (evt.keyCode === 27) {
      _toggleMenu(false);
    }
  };

  if (isClient()) {
    document.addEventListener('keydown', _handleKeyDown);
  }

  const _handleClick = (val: string) => {
    _toggleSecondMenu(val === '' ? false : true);
    setActiveNavigationSlug(val);
  };

  // Checks wether we should show the Navigation item child nodes.
  const _showChildren = (element: NavigationProps) =>
    element.includeInMenu === true;

  /* eslint-disable */
  useEffect(() => {
    if (activeNavigationSlug) {
      const navObject = navigation.filter(
        (n: any) => n.slug === activeNavigationSlug
      );
      setActiveNavigationObject(navObject[0]);
    }
  }, [activeNavigationSlug]);
  /* eslint-enable */

  return (
    <FocusLock>
      <NavigationSidebarStyled isSecondMenuOpen={isSecondMenuOpen} ref={ref}>
        <button
          type="button"
          className="nav__menu-btn--close"
          onClick={() => _toggleMenu(false)}
        >
          <Icon type="close" />
        </button>
        <ul className="nav__menu--first">
          {navigation.map((navItem: NavigationProps, idx: number) => {
            const { displayName, slug, path, children } = navItem || {};
            if (children.some(_showChildren)) {
              return (
                <li key={`${displayName}-${idx}`}>
                  <button
                    type="button"
                    className={`nav__menu-btn ${
                      activeNavigationSlug === slug ? 'isActive' : ''
                    }`}
                    onClick={() => _handleClick(slug)}
                  >
                    {displayName}
                    <Icon type="arrow-right" color="#77E8C6" />
                  </button>
                  {isSecondMenuOpen && (
                    <ul className="nav__menu--second">
                      <li className="nav__menu-btn--back">
                        <button type="button" onClick={() => _handleClick('')}>
                          <Icon type="arrow-left" color="#2B2F51" />
                        </button>
                      </li>
                      {activeNavigationObject && (
                        <>
                          <li>
                            <a href={path}>
                              View all{' '}
                              {activeNavigationObject.displayName.toLowerCase()}
                            </a>
                          </li>
                          {activeNavigationObject.children.map(
                            (child: any, idx: number) => {
                              const { displayName, path, includeInMenu } =
                                child || {};
                              if (includeInMenu) {
                                return (
                                  <li key={`${displayName}-${idx}`}>
                                    <a href={path}>{displayName}</a>
                                  </li>
                                );
                              }
                            }
                          )}
                        </>
                      )}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={`${displayName}-${idx}`}>
                  <a href={path}>{displayName}</a>
                </li>
              );
            }
          })}
          <li className="nav__socials">
            <a href="https://en-gb.facebook.com/">
              <Icon type="facebook" color="#C3C6DE" />
            </a>
            <a href="https://twitter.com/">
              <Icon type="twitter" color="#C3C6DE" />
            </a>
            <a href="https://uk.linkedin.com/">
              <Icon type="linkedin" color="#C3C6DE" />
            </a>
          </li>
        </ul>
      </NavigationSidebarStyled>
    </FocusLock>
  );
};

export default NavigationSidebar;
