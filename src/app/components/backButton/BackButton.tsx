import React from 'react';

import BackButtonStyled from './BackButton.styled';
import Icon from '../icon/Icon';

interface Props {
  className?: string,
  label: string,
}

const BackButton: React.FC<Props> = ({ className, label }) => {
  return (
    <BackButtonStyled className={className}>
      <Icon className="back-button__icon" type="arrow" />
      <span className="back-button__text">{label}</span>
    </BackButtonStyled>
  );
};

export default BackButton;
