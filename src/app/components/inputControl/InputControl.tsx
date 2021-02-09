import React from 'react';

import Icon from '~/components/icon/Icon';
import InputControlStyled from './InputControl.styled';

interface Props {
  className?: string,
  type: string;
  onClick: (ev:any) => void;
}

const InputControl: React.FC<Props> = ({ className, type, onClick }) => {
  return (
    <InputControlStyled className={className} onClick={onClick}>
      <Icon type={type} />
    </InputControlStyled>
  )
}

export default InputControl;
