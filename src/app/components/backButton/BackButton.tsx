import React from 'react';

import BackButtonStyled from './BackButton.styled';
import Icon from '../icon/Icon';

interface Props {
  className?: string;
  label: string;
  color?: string;
}

const BackButton = ({ className, label, color = '#6E729B' }: Props) => {
  return (
    <BackButtonStyled className={className}>
      <Icon className="back-button__icon" type="arrow-left" color={color} />
      <span className="back-button__text">{label}</span>
    </BackButtonStyled>
  );
};

export default BackButton;
