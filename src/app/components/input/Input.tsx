import React, { useState, useEffect } from 'react';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import InputStyled from './Input.styled';

interface Props {
  className?: string;
  type?: string | undefined;
  id: string;
  label: string;
  placeholder?: string;
  defaultValue?: number | string;
  isHidden?: boolean;
  _onChange?: (e: any) => void;
  _onBlur?: (e: any) => void;
  min?: string;
  max?: string;
}

const Input = ({
  className,
  type = 'text',
  isHidden = false,
  defaultValue = '',
  id,
  label,
  min,
  max,
  placeholder,
  _onChange,
  _onBlur,
}: Props) => {
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <InputStyled className={className}>
      {!isHidden && <label htmlFor={id}>{label}</label>}
      {isHidden && (
        <VisuallyHidden>
          <label htmlFor={id}>{label}</label>
        </VisuallyHidden>
      )}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        onChange={e => {
          setValue(e.target.value);
          if (_onChange) _onChange(e);
        }}
        onBlur={e => {
          setValue(e.target.value);
          if (_onBlur) _onBlur(e);
        }}
      />
    </InputStyled>
  );
};

export default Input;
