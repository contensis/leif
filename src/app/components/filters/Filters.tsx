import React, { AnchorHTMLAttributes, useState } from 'react';

import FiltersStyled from './Filters.styled';

import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';

export interface Props {
  className?: string;
  filters: any;
}

const Filters = ({ className, filters }: Props) => {
  if (!filters || filters.length < 1) return null;
  const [showFilters, setShowFilters] = useState(false);

  return (
    <FiltersStyled className={className} showFilters={showFilters}>
      <Button
        className="filters__toggle-btn"
        label="Filter products"
        icon="filter"
        onClick={() => setShowFilters(!showFilters)}
      />
      <div className="filters__wrapper">
        {filters.map((filter: any, idx: number) => {
          const type = filter.type;
          switch (type) {
            case 'dropdown': {
              return (
                <Dropdown
                  key={idx}
                  className="filter__dropdown"
                  options={filter.options}
                  label={filter.label}
                  id={filter.id}
                />
              );
            }
            case 'sort': {
              return (
                <Dropdown
                  key={idx}
                  type="sort"
                  className="filter__dropdown"
                  options={filter.options}
                  label={filter.label}
                  id={filter.id}
                />
              );
            }
            default:
              break;
          }
        })}
      </div>
    </FiltersStyled>
  );
};

export default Filters;
