import React from 'react';

import BackButtonStyled from './BackButton.styled';
import Icon from '../icon/Icon';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.label
 */

const BackButton = ({ className, label }) => {
  return (
    <BackButtonStyled className={className}>
      <Icon className="back-button__icon" type="arrow" />
      <span className="back-button__text">{label}</span>
    </BackButtonStyled>
  );
};

export default BackButton;
