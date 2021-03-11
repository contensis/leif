import React from 'react';

import Icon from '../icon/Icon';
import InputControlStyled from './InputControl.styled';

interface Props {
  className?: string;
  type: string;
  onClick: (ev: any) => void;
}

const InputControl = ({ className, type, onClick }: Props) => {
  return (
    <InputControlStyled className={className} onClick={onClick}>
      <Icon type={type} className="input-control__icon" color="#2B2F51" />
    </InputControlStyled>
  );
};

export default InputControl;
