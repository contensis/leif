import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VisuallyHidden from '~/features/visuallyHidden';

import HamburgerStyled from '../components.styled/Hamburger.styled';

const Hamburger = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HamburgerStyled
      className={className}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      <div className="hbWrapper">
        <span className="hbLayer" />
        <span className="hbLayer" />
        <span className="hbLayer" />
      </div>
      <VisuallyHidden text="Open menu" />
    </HamburgerStyled>
  );
};

Hamburger.propTypes = {
  className: PropTypes.string,
};

export default Hamburger;
