import React from 'react';

import HeaderStyled from './Header.styled';

import logo from '~/assets/logo-dark.png';
import Hamburger from '../hamburger/Hamburger';
import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

/**
 * @param {object} props
 * @param {string} props.className
 */

const Header = ({ className }) => {
  return (
    <HeaderStyled className={className}>
      <a href="/">
        <img className="header__logo" src={logo} alt="Leif" />
        <VisuallyHidden text="Home" />
      </a>
      <div className="header__actions">
        <IconButton type="search" text="Search site" />
        <IconButton type="pot" text="Basket" />
        <Hamburger />
      </div>
    </HeaderStyled>
  );
};

export default Header;
