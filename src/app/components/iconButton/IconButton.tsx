import React from 'react';

import IconButtonStyled from './IconButton.styled';
import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
interface Props {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon: string;
  text?: string;
  _func?: () => void;
  isToggled?: boolean;
}

const IconButton = ({
  className,
  type = 'button',
  icon,
  text,
  _func,
  isToggled = false,
}: Props) => {
  const _handleClick = () => {
    if (_func) {
      _func();
    }
  };

  return (
    <IconButtonStyled
      className={className}
      type={type}
      onClick={() => _handleClick()}
    >
      <div className="icon-btn__wrapper">
        {!isToggled && (
          <>
            <Icon type={icon} />
            <VisuallyHidden text={text} />
          </>
        )}
        {isToggled && <Icon type="close" />}
      </div>
    </IconButtonStyled>
  );
};

export default IconButton;
