import React from 'react';
import Icon from '../icon/Icon';

import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import DropdownStyled from './Dropdown.styled';

export interface Props {
  className?: string;
  options: any;
  label: string;
  id: string;
}

const Dropdown = ({ className, options, label, id }: Props) => {
  if (!options || options.length < 1) return null;
  return (
    <DropdownStyled className={className}>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <select name={id} id={id}>
        <option value="" selected disabled hidden>
          {label}
        </option>
        {options.map((opt: any, idx: number) => {
          return (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
      <Icon type="chevronDown" className="dropdown__icon" />
    </DropdownStyled>
  );
};

export default Dropdown;
