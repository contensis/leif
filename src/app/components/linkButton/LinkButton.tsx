import React from 'react';

import LinkButtonStyled from './LinkButton.styled';
import Icon from '../icon/Icon';
interface Props {
  className?: string;
  type?: string;
  isHollow?: boolean;
  isDisabled?: boolean; 
  hasArrow?: boolean;
  label: string;
  href: string;
  onClick?: Function;
}

const LinkButton: React.FC<Props> = ({
  className,
  type = 'primary',
  isHollow = false,
  isDisabled = false,
  hasArrow = false,
  label,
  href,
  onClick,
}) => {
  const _handleClick = (e:any) => {
    e.preventDefault();
    if (!isDisabled) {
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
      hasArrow={hasArrow}
      title={label}
      href={href}
      onClick={e => _handleClick(e)}
    >
      {label}
      {hasArrow && <Icon type="arrowRight" className="link-btn__arrow" />}
    </LinkButtonStyled>
  );
};

export default LinkButton;
