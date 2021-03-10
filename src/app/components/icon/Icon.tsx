import React from 'react';

import IconStyled from './Icon.styled';

export interface Props {
  className?: string;
  type: string;
  color?: string;
  height?: number;
  width?: number;
}

const Icon = ({ className, type, color, height = 24, width = 24 }: Props) => {
  return (
    <IconStyled
      className={className}
      type={type}
      color={color}
      height={height}
      width={width}
    />
  );
};

export default Icon;
