import React from 'react';

import BackButtonStyled from './BackButton.styled';
import Icon from '../icon/Icon';

interface Props {
  className?: string;
  label?: string;
  color?: string;
  uri: string;
}

const BackButton = ({
  className,
  label = 'Back',
  uri,
  color = '#6E729B',
}: Props) => {
  if (!uri) return null;
  return (
    <BackButtonStyled className={className} href={uri}>
      <Icon className="back-button__icon" type="arrow-left" color={color} />
      <span className="back-button__text">{label}</span>
    </BackButtonStyled>
  );
};

export default BackButton;
