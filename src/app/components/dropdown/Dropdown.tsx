import React from 'react';
import Icon from '../icon/Icon';

import VisuallyHidden from '../visuallyHidden/VisuallyHidden';
import DropdownStyled from './Dropdown.styled';

export interface Props {
  key?: number;
  className?: string;
  filterGroupKey: string;
  filters: any;
  updateSelectedFilters: (filterGroupKey: string, key: number) => void;
  clearFilters: () => void;
  title: string;
  type?: 'default' | 'sort';
}

const Dropdown = ({
  className,
  filterGroupKey,
  filters,
  updateSelectedFilters,
  // clearFilters,
  title,
  type = 'default',
}: Props) => {
  if (!filters || filters.length < 1) return null;

  const _handleFilterSelect = (key: number) => {
    // clearFilters();
    updateSelectedFilters(filterGroupKey, key);
  };

  return (
    <DropdownStyled className={className} type={type}>
      <VisuallyHidden>
        <label htmlFor={title}>{title}</label>
      </VisuallyHidden>
      <select
        name={title}
        id={filterGroupKey}
        onChange={(e: any) => _handleFilterSelect(e.target.value)}
        onBlur={(e: any) => _handleFilterSelect(e.target.value)}
      >
        <option defaultValue={title}>{title}</option>
        {filters.map((filter: any, idx: number) => {
          return (
            <option key={idx} value={filter.key}>
              {filter.title}
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
