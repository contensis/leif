import React, { useState } from 'react';

import FiltersStyled from './Filters.styled';

import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';

export interface Props {
  className?: string;
  filters: any;
  updateSelectedFilters?: (filterGroupKey: string, key: number) => void;
  clearFilters?: () => void;
  updateCurrentFacet?: (fKey: string) => void;
  currentFacet?: string;
  type?: 'dropdown' | 'facet';
}

const Filters = ({
  className,
  filters,
  updateSelectedFilters,
  clearFilters,
  updateCurrentFacet,
  currentFacet,
  type = 'dropdown',
}: Props) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const _RenderFilters = (type: string) => {
    switch (type) {
      case 'facet':
        return (
          <>
            {Object.keys(filters).map((fKey, idx) => {
              const totalCount =
                filters[fKey].results && filters[fKey].results.length;
              const label = filters[fKey].title;
              return (
                <Button
                  className="filter__facet"
                  key={idx}
                  onClick={() => updateCurrentFacet(fKey)}
                  btnTheme="secondary"
                  label={`${label} (${totalCount})`}
                  isHollow={currentFacet !== fKey}
                />
              );
            })}
          </>
        );
      case 'dropdown':
      default:
        return (
          <>
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
          </>
        );
    }
  };

  if (!filters || filters.length < 1) return null;
  return (
    <FiltersStyled className={className} showFilters={showFilters}>
      <Button
        className="filters__toggle-btn"
        label="Filter products"
        icon="filter"
        onClick={() => setShowFilters(!showFilters)}
      />
      <div className="filters__wrapper">{_RenderFilters(type)}</div>
    </FiltersStyled>
  );
};

export default Filters;
