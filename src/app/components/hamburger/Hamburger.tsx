import React, { useState } from 'react';

import HamburgerStyled from './Hamburger.styled';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';

interface Props {
  className?: string,
}

const Hamburger: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HamburgerStyled
      className={className}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
    >
      <div className="hamburger__wrapper">
        <span className="hamburger__layer" />
        <span className="hamburger__layer" />
        <span className="hamburger__layer" />
      </div>
      <VisuallyHidden text="Open menu" />
    </HamburgerStyled>
  );
};

export default Hamburger;
