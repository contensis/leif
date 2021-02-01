import React from 'react';
import PropTypes from 'prop-types';

import LinkButtonStyled from '../components.styled/LinkButton.styled';

const LinkButton = ({
  className,
  type = 'primary',
  isHollow = false,
  label,
  href,
  onClick,
}) => {
  return (
    <LinkButtonStyled
      className={className}
      type={type}
      isHollow={isHollow}
      href={href}
      title={label}
      onClick={e => onClick(e)}
    >
      {label}
    </LinkButtonStyled>
  );
};

LinkButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isHollow: PropTypes.bool,
};

export default LinkButton;
