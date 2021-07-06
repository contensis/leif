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
  height?: number;
  width?: number;
}

const IconButton = ({
  className,
  type = 'button',
  icon,
  height,
  width,
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
            <Icon type={icon} width={width} height={height} color="#2B2F51" />
            <VisuallyHidden text={text} />
          </>
        )}
        {isToggled && (
          <>
            <VisuallyHidden text="Close" />
            <Icon type="close" />
          </>
        )}
      </div>
    </IconButtonStyled>
  );
};

export default IconButton;
