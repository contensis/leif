import React from 'react';

import LinkButtonStyled from './LinkButton.styled';
import Icon from '../icon/Icon';
export interface Props {
  className?: string;
  type?: string;
  isHollow?: boolean;
  isDisabled?: boolean; 
  icon?: any;
  label: string;
  href: string;
  onClick?: (ev:any) => void;
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
  const _handleClick = (e:any) => {
    e.preventDefault();
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
      title={label}
      href={href}
      onClick={e => _handleClick(e)}
    >
      {label}
      {icon && <Icon type={icon} className="link-btn__icon" />}
    </LinkButtonStyled>
  );
};

export default LinkButton;
