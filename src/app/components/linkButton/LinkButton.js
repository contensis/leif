import React from 'react';

import LinkButtonStyled from './LinkButton.styled';
import Icon from '../icon/Icon';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.type
 * @param {boolean} props.isHollow // Defaulted to false
 * @param {boolean} props.isDisabled // Defaulted to false
 * @param {boolean} props.hasArrow // Defaulted to false
 * @param {string} props.label
 * @param {string} props.href
 * @param {Function} props.onClick
 */

const LinkButton = ({
  className,
  type = 'primary',
  isHollow = false,
  isDisabled = false,
  hasArrow = false,
  label,
  href,
  onClick,
}) => {
  const _handleClick = e => {
    e.preventDefault();
    if (!isDisabled) {
      onClick(e);
    } else {
      return null;
    }
  };

  return (
    <LinkButtonStyled
      className={className}
      type={type}
      isHollow={isHollow}
      isDisabled={isDisabled}
      hasArrow={hasArrow}
      title={label}
      href={href}
      onClick={e => _handleClick(e)}
    >
      {label}
      {hasArrow && <Icon type="arrowRight" className="lbArrow" />}
    </LinkButtonStyled>
  );
};

export default LinkButton;
