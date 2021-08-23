import React, { useEffect, useRef, useState } from 'react';

// Styles
import NavigationSidebarStyled from './NavigationSidebar.styled';

// Components
import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

// Utils
import FocusLock from 'react-focus-lock';

// Hooks
import { _useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import { _useLockBodyScroll } from '../../utils/hooks/useLockBodyScroll';
import { isClient } from '../../utils/isClient';

// Types
import { NavigationProps } from './Navigation.d';
import Link from '../link/Link';

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
          <VisuallyHidden text="Close menu" />
        </button>
        <nav>
          <ul className="nav__menu--first">
            {navigation.map((navItem: NavigationProps, idx: number) => {
              const { displayName, slug, path, children, includeInMenu } =
                navItem || {};
              if (!includeInMenu) return null;
              if (slug === 'products' && children.some(_showChildren)) {
                return (
                  <li key={`${displayName}-${idx}`}>
                    <button
                      type="button"
                      className={`nav__menu-btn ${
                        activeNavigationSlug === slug ? 'isActive' : ''
                      }`}
                      onClick={() => _handleClick(slug)}
                      aria-haspopup="true"
                      aria-expanded={
                        activeNavigationSlug === slug ? 'true' : 'false'
                      }
                    >
                      {displayName}
                      <Icon type="arrow-right" color="#77E8C6" />
                    </button>
                    {isSecondMenuOpen && (
                      <ul className="nav__menu--second">
                        <li className="nav__menu-btn--back">
                          <button
                            type="button"
                            onClick={() => _handleClick('')}
                          >
                            <Icon type="arrow-left" color="#2B2F51" />
                          </button>
                        </li>
                        {activeNavigationObject && (
                          <>
                            <li>
                              <Link
                                uri={path}
                                onClick={() => _toggleMenu(false)}
                              >
                                View all{' '}
                                {activeNavigationObject.displayName.toLowerCase()}
                              </Link>
                            </li>
                            {activeNavigationObject.children.map(
                              (child: any, idx: number) => {
                                const { displayName, path, includeInMenu } =
                                  child || {};
                                if (includeInMenu) {
                                  return (
                                    <li key={`${displayName}-${idx}`}>
                                      <Link
                                        uri={path}
                                        onClick={() => _toggleMenu(false)}
                                      >
                                        {displayName}
                                      </Link>
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
                    <Link uri={path} onClick={() => _toggleMenu(false)}>
                      {displayName}
                    </Link>
                  </li>
                );
              }
            })}
            <li className="nav__socials">
              <Link uri="https://en-gb.facebook.com/">
                <Icon type="facebook" color="#C3C6DE" />
                <VisuallyHidden text="Facebook" />
              </Link>
              <Link uri="https://twitter.com/contensis?lang=en">
                <Icon type="twitter" color="#C3C6DE" />
                <VisuallyHidden text="Contensis Twitter" />
              </Link>
              <Link uri="https://www.linkedin.com/showcase/contensis">
                <Icon type="linkedin" color="#C3C6DE" />
                <VisuallyHidden text="Contensis LinkedIn" />
              </Link>
            </li>
          </ul>
        </nav>
      </NavigationSidebarStyled>
    </FocusLock>
  );
};

export default NavigationSidebar;
