import React from 'react';

import BackButtonStyled from '../components.styled/BackButton.styled';
import Icon from '../../icon';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.label
 */

const BackButton = ({ className, label }) => {
  return (
    <BackButtonStyled className={className}>
      <Icon className="bbIcon" type="arrow" />
      <span className="bbText">{label}</span>
    </BackButtonStyled>
  );
};

export default BackButton;
