import React, { useState } from 'react';

import FiltersStyled from './Filters.styled';

import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';

export interface Props {
  className?: string;
  filters: any;
  updateSelectedFilters: (filterGroupKey: string, key: number) => void;
  clearFilters: () => void;
}

const Filters = ({
  className,
  filters,
  updateSelectedFilters,
  clearFilters,
}: Props) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  if (!filters || filters.length < 1) return null;
  return (
    <FiltersStyled className={className} showFilters={showFilters}>
      <Button
        className="filters__toggle-btn"
        label="Filter products"
        icon="filter"
        onClick={() => setShowFilters(!showFilters)}
      />
      <div className="filters__wrapper">
        {Object.keys(filters).map((fKey, idx) => {
          return (
            <Dropdown
              className="filter__dropdown"
              key={idx}
              clearFilters={clearFilters}
              filterGroupKey={fKey}
              filters={filters[fKey].items}
              title={filters[fKey].title}
              updateSelectedFilters={updateSelectedFilters}
              // isSingleFilter={Object.keys(filters).length === 1}
            />
          );
        })}
      </div>
    </FiltersStyled>
  );
};

export default Filters;
