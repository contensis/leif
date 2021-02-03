import React, { useState } from 'react';

import HamburgerStyled from './Hamburger.styled';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

/**
 * @param {object} props
 * @param {string} props.className
 */

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

export default Hamburger;
