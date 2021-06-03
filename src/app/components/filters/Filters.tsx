import React, { useState } from 'react';

import FiltersStyled from './Filters.styled';

import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { selectHasDropdownFiltersSelected } from '~/redux/ui/selectors';
import { setHasDropdownFiltersSelected } from '~/redux/ui/actions';

export interface Props {
  className?: string;
  filters: any;
  updateSelectedFilters: (filterGroupKey: string, key: string) => void;
  clearFilters: () => void;
  updateCurrentFacet: (fKey: string) => void;
  currentFacet?: string;
  hasResetBtn?: boolean;
}

const Filters = ({
  className,
  filters,
  updateSelectedFilters,
  clearFilters,
  updateCurrentFacet,
  currentFacet,
  hasResetBtn = false,
}: Props) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const dispatch = useDispatch();
  const _setHasDropdownFiltersSelected = (val: boolean) => {
    dispatch(setHasDropdownFiltersSelected(val));
  };
  const hasDropdownFiltersSelected = useSelector(
    selectHasDropdownFiltersSelected
  );

  const _RenderFilters = () => {
    return Object.keys(filters).map((fKey: any, idx: number) => {
      switch (filters[fKey].type) {
        case 'facet': {
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
        }
        case 'dropdown':
        default:
          return (
            <Dropdown
              className="filter__dropdown"
              key={idx}
              clearFilters={clearFilters}
              filterGroupKey={fKey}
              filters={filters[fKey].items}
              title={filters[fKey].title}
              updateSelectedFilters={updateSelectedFilters}
              _setHasDropdownFiltersSelected={_setHasDropdownFiltersSelected}
            />
          );
      }
    });
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
      <div className="filters__wrapper">
        {_RenderFilters()}
        {hasResetBtn && hasDropdownFiltersSelected && currentFacet !== 'all' && (
          <Button
            btnTheme="secondary"
            className="filters__reset-btn"
            label="Reset filters"
            isHollow={true}
            onClick={() => {
              clearFilters();
              _setHasDropdownFiltersSelected(false);
            }}
          />
        )}
      </div>
    </FiltersStyled>
  );
};

export default Filters;
