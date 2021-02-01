import React, { useState } from 'react';
import VisuallyHidden from '~/features/visuallyHidden';

import HamburgerStyled from '../components.styled/Hamburger.styled';

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
