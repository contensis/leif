import React from 'react';
import LinkButtonStyled from './LinkButton.styled';
import Icon from '~/components/icon/Icon';

export interface Props {
  className?: string;
  type?: string;
  icon?: any;
  label?: string;
  path: string;
  onClick?: (e: any) => void;
  theme?: 'riptide' | 'martinique' | 'white';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const LinkButton = ({
  className,
  theme = 'riptide',
  variant = 'primary',
  disabled = false,
  icon,
  label,
  path,
  onClick,
}: Props) => {
  if (!path) return null;
  const doHandleClick = (e: any) => {
    if (onClick) onClick(e);
  };

  return (
    <LinkButtonStyled
      className={className}
      data-theme={theme}
      data-variant={variant}
      data-disabled={disabled}
      path={path}
      onClick={e => doHandleClick(e)}
    >
      {label}
      {icon && <Icon type={icon} className="link-btn__icon" />}
    </LinkButtonStyled>
  );
};

export default LinkButton;
