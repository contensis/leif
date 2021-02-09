import React, { useState, useEffect } from 'react';
import InputStyled from './Input.styled';

interface Props {
  className?: string,
  type?: string,
  id: string,
  label: string;
  placeholder?: string;
  defaultValue?: number | string;
}

const Input: React.FC<Props> = ({
  className,
  type = 'text',
  defaultValue = null,
  id,
  label,
  placeholder,
}) => {
  const [value, setValue] = useState(defaultValue);

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
