import React, { useState, useEffect } from 'react';
import InputStyled from './Input.styled';

interface Props {
  className?: string,
  type?: string | undefined,
  id: string,
  label: string;
  placeholder?: string;
  defaultValue?: number | string;
}

const Input =({
  className,
  type = 'text',
  defaultValue = '',
  id,
  label,
  placeholder,
}: Props) => {
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue])

  return (
    <InputStyled className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={e => setValue(e.target.value)}
      />
    </InputStyled>
  );
};

export default Input;
