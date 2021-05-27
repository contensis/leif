import React, { useState, useEffect } from 'react';
import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import TextareaStyled from './Textarea.styled';

interface Props {
  className?: string;
  id: string;
  label: string;
  placeholder?: string;
  defaultValue?: number | string;
  isHidden?: boolean;
  _onChange?: (e: any) => void;
  _onBlur?: (e: any) => void;
}

const Textarea = ({
  className,
  isHidden = false,
  defaultValue = '',
  id,
  label,
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
    <TextareaStyled className={className}>
      {!isHidden && <label htmlFor={id}>{label}</label>}
      {isHidden && (
        <VisuallyHidden>
          <label htmlFor={id}>{label}</label>
        </VisuallyHidden>
      )}
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
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
    </TextareaStyled>
  );
};

export default Textarea;
