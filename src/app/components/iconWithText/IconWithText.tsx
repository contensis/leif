import React from 'react';
import Icon from '../icon/Icon';

import IconWithTextStyled from './IconWithText.styled';

export interface Props {
  className?: string;
  icon: string;
  title: string;
  text?: string;
}

const IconWithText = ({ className, icon, title, text }: Props) => {
  if (!icon) return null;
  return (
    <IconWithTextStyled className={className}>
      <Icon type={icon} className="icon-with-text__icon" />
      <div className="icon-with-text__wrapper">
        {title && <p className="icon-with-text__title">{title}</p>}
        {text && <p className="icon-with-text__text">{text}</p>}
      </div>
    </IconWithTextStyled>
  );
};

export default IconWithText;
