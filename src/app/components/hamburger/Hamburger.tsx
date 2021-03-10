import React from 'react';

import HamburgerStyled from './Hamburger.styled';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
interface Props {
  className?: string;
  isToggled?: boolean;
}

const Hamburger = ({ className, isToggled = false }: Props) => {
  return (
    <HamburgerStyled className={className} isToggled={isToggled}>
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
