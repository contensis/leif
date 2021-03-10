import React, { useEffect, useState } from 'react';
import Icon from '../icon/Icon';

import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import DropdownStyled from './Dropdown.styled';

export interface Props {
  className?: string;
  options: any;
  label: string;
  id: string;
  type?: 'default' | 'sort';
}

const Dropdown = ({
  className,
  type = 'default',
  options,
  label,
  id,
}: Props) => {
  if (!options || options.length < 1) return null;
  const [value, setValue] = useState<string>('');

  return (
    <DropdownStyled className={className} type={type}>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <select name={id} id={id} onChange={(e: any) => setValue(e.target.value)}>
        <option defaultValue={label} hidden>
          {label}
        </option>
        {options.map((opt: any, idx: number) => {
          const hasPrefix = value === opt.value && type === 'sort';
          return (
            <option key={idx} value={opt.value}>
              {hasPrefix && 'Sort by: '}
              {opt.label}
            </option>
          );
        })}
      </select>
      <Icon
        type={type === 'sort' ? 'sort' : 'chevron-down'}
        className="dropdown__icon"
      />
    </DropdownStyled>
  );
};

export default Dropdown;
