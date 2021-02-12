import React, { useState } from 'react';

import IconButtonStyled from './IconButton.styled';
import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  icon: string;
  text?: string;
}

const IconButton = ({ className, type = "button", icon, text }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconButtonStyled
      className={className}
      type={type}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="icon-btn__wrapper">
        {!isOpen && (
          <>
            <Icon type={icon} />
            <VisuallyHidden text={text} />
          </>
        )}
        {isOpen && <Icon type="cross" />}
      </div>
    </IconButtonStyled>
  );
};

export default IconButton;
