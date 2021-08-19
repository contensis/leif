import React from 'react';

import LinkButtonStyled from './LinkButton.styled';
import Icon from '../icon/Icon';
import { iconColor } from '../../utils/iconColor';

export interface Props {
  className?: string;
  type?: string;
  isHollow?: boolean;
  isDisabled?: boolean;
  icon?: any;
  label?: string;
  href: string;
  onClick?: (ev: any) => void;
}

const LinkButton = ({
  className,
  type = 'primary',
  isHollow = false,
  isDisabled = false,
  icon,
  label,
  href,
  onClick,
}: Props) => {
  if (!label || !href) return null;
  const _handleClick = (e: any) => {
    if (!isDisabled && onClick) {
      onClick(e);
    } else {
      return;
    }
  };

  return (
    <LinkButtonStyled
      className={className}
      type={type}
      isHollow={isHollow}
      isDisabled={isDisabled}
      hasIcon={icon ? true : false}
      uri={href}
      onClick={e => _handleClick(e)}
    >
      {label}
      {icon && (
        <Icon
          type={icon}
          className="link-btn__icon"
          color={iconColor(type, isHollow, isDisabled)}
        />
      )}
    </LinkButtonStyled>
  );
};

export default LinkButton;
