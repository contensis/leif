import React from 'react';

import HeaderStyled from './Header.styled';

import Hamburger from '../hamburger/Hamburger';
import IconButton from '../iconButton/IconButton';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
export interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <HeaderStyled className={className}>
      <a href="/">
        <img
          className="header__logo"
          src="/static/img/logos/logo-dark.png"
          alt="Leif"
        />
        <VisuallyHidden text="Home" />
      </a>
      <div className="header__actions">
        <IconButton icon="search" text="Search site" />
        <IconButton icon="pot" text="Basket" />
        <Hamburger />
      </div>
    </HeaderStyled>
  );
};

export default Header;
