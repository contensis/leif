import React, { useEffect } from 'react';

// Components
import Hamburger from '../hamburger/Hamburger';
import NavigationSidebar from '~/components/navigationSidebar/NavigationSidebar';

// Style
import NavigationStyled from './Navigation.styled';

// Utils
import { addOverlayCSS, removeOverlayCSS } from '../../utils/addOverlayCSS';

export interface Props {
  className?: string;
  navigation: any;
  hasNavigationTree: boolean;
  isMenuOpen: boolean;
  _toggleMenu: (val: boolean) => void;
  isSecondMenuOpen: boolean;
  _toggleSecondMenu: (val: boolean) => void;
  _setIsSearchOpen: (val: boolean) => void;
}

const Navigation = ({
  className,
  navigation,
  hasNavigationTree,
  _toggleMenu,
  isMenuOpen,
  isSecondMenuOpen,
  _toggleSecondMenu,
  _setIsSearchOpen,
}: Props) => {
  useEffect(() => {
    if (isMenuOpen) addOverlayCSS();
    else removeOverlayCSS();
  }, [isMenuOpen]);

  if (!hasNavigationTree) return null;
  return (
    <NavigationStyled className={className}>
      <button
        type="button"
        onClick={() => {
          _setIsSearchOpen(false);
          _toggleMenu(!isMenuOpen);
          _toggleSecondMenu(false);
        }}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        className="nav__btn-open"
      >
        <Hamburger isToggled={isMenuOpen} />
      </button>
      {isMenuOpen && (
        <>
          <NavigationSidebar
            navigation={navigation}
            _toggleMenu={_toggleMenu}
            _toggleSecondMenu={_toggleSecondMenu}
            isSecondMenuOpen={isSecondMenuOpen}
          />
        </>
      )}
    </NavigationStyled>
  );
};

export default Navigation;
