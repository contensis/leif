import React from 'react';
import PropTypes from 'prop-types';

import HeaderStyled from '../components.styled/Header.styled';

// import logo from '../../../public/logos/logo-dark.png';
import Hamburger from '../../hamburger';
import { IconButton } from '../../button';

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

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
