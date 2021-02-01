import React from 'react';
import PropTypes from 'prop-types';

import BackButtonStyled from '../components.styled/BackButton.styled';
import Icon from '../../icon';

const BackButton = ({ className, label }) => {
  return (
    <BackButtonStyled className={className}>
      <Icon className="bbIcon" type="arrow" />
      <span className="bbText">{label}</span>
    </BackButtonStyled>
  );
};

BackButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default BackButton;
