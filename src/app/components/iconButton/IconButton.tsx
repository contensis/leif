import React, { useState } from 'react';

import IconButtonStyled from './IconButton.styled';
import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
interface Props {
  className?: string;
  type?: "button" | "submit" | "reset";
  icon: string;
  text?: string;
  _func?: () => void;
}

const IconButton = ({ className, type = "button", icon, text, _func, }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const _handleClick = () => {
    setIsOpen(!isOpen);
    if (_func) {
      _func()
    }
  }

  return (
    <IconButtonStyled
      className={className}
      type={type}
      onClick={() => _handleClick()}
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
