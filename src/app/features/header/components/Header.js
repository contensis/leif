import React from 'react';

import HeaderStyled from '../components.styled/Header.styled';

// import logo from '../../../public/logos/logo-dark.png';
import Hamburger from '../../hamburger';
import { IconButton } from '../../button';

/**
 * @param {object} props
 * @param {string} props.className
 */

const Header = ({ className }) => {
  return (
    <HeaderStyled className={className}>
      {/* <img className="hLogo" src={logo} alt="Leif" /> */}
      <div className="hActions">
        <IconButton type="search" text="Search site" />
        <IconButton type="pot" text="Basket" />
        <Hamburger />
      </div>
    </HeaderStyled>
  );
};

export default Header;
