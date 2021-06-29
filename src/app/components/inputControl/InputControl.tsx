import React from 'react';

import Icon from '../icon/Icon';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import InputControlStyled from './InputControl.styled';

interface Props {
  className?: string;
  type: string;
  label: string;
  onClick: (ev: any) => void;
}

const InputControl = ({ className, type, label, onClick }: Props) => {
  return (
    <InputControlStyled className={className} onClick={onClick}>
      <VisuallyHidden text={label} />
      <Icon type={type} className="input-control__icon" color="#2B2F51" />
    </InputControlStyled>
  );
};

export default InputControl;
