import React from 'react';

import LinkButtonStyled from '../components.styled/LinkButton.styled';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.type
 * @param {string} props.label
 * @param {string} props.href
 * @param {Function} props.onClick
 */

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

export default LinkButton;
