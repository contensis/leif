import React from 'react';
import Icon from '../icon/Icon';

import IconWithTextStyled from './IconWithText.styled';

interface Props {
  icon: string;
  title: string;
  text?: string;
}

const IconWithText = ({ icon, title, text }: Props) => {
  return (
    <IconWithTextStyled>
      <Icon type={icon} className="icon-with-text__icon"/>
      <div className="icon-with-text__wrapper">
        <p className="icon-with-text__title">{title}</p>
        <p className="icon-with-text__text">{text}</p>
      </div>
    </IconWithTextStyled>
  )
}

export default IconWithText;
