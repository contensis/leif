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
  return (
    <IconWithTextStyled className={className}>
      <Icon type={icon} className="icon-with-text__icon" />
      <div className="icon-with-text__wrapper">
        <p className="icon-with-text__title">{title}</p>
        <p className="icon-with-text__text">{text}</p>
      </div>
    </IconWithTextStyled>
  );
};

export default IconWithText;
