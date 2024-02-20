import React from 'react';
import ButtonStyled from './Button.styled';
import Icon from '~/components/icon/Icon';

export interface Props {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  icon?: string;
  label: string;
  onClick?: (ev: any) => void;
  theme?: 'riptide' | 'martinique' | 'white';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button = ({
  className,
  type = 'button',
  theme = 'riptide',
  variant = 'primary',
  disabled = false,
  icon,
  label,
  onClick,
}: Props) => {
  const doHandleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) onClick(e);
  };

  return (
    <ButtonStyled
      className={className}
      type={type}
      data-theme={theme}
      data-variant={variant}
      data-disabled={disabled}
      disabled={disabled}
      onClick={e => doHandleClick(e)}
    >
      {label}
      {icon && <Icon type={icon} className="btn__icon" />}
    </ButtonStyled>
  );
};

export default Button;
