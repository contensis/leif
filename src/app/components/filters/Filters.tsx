import React, { useState } from 'react';
import {
  Facet,
  Filter,
  SearchProps,
} from '@zengenti/contensis-react-base/search';

import FiltersStyled from './Filters.styled';

import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { selectHasDropdownFiltersSelected } from '~/redux/ui/selectors';
import { setHasDropdownFiltersSelected } from '~/redux/ui/actions';

export interface Props {
  className?: string;
  clearFilters: SearchProps['clearFilters'];
  currentFacet: string;
  filters: { [key: string]: Facet | Filter };
  hasResetBtn?: boolean;
  updateCurrentFacet: SearchProps['updateCurrentFacet'];
  updateSelectedFilters: SearchProps['updateSelectedFilters'];
}

const Filters = ({
  className,
  clearFilters,
  currentFacet,
  filters,
  hasResetBtn = false,
  updateCurrentFacet,
  updateSelectedFilters,
}: Props) => {
  const dispatch = useDispatch();
  const [showFilters, setShowFilters] = useState(false);

  // TODO: Question? Is this redux stuff actually required?
  // can the same functionality be handled in component state instead?

  // Select a value from redux
  const hasDropdownFiltersSelected = useSelector(
    selectHasDropdownFiltersSelected
  );

  // Dispatch an action to redux
  const _setHasDropdownFiltersSelected = (val: boolean) =>
    dispatch(setHasDropdownFiltersSelected(val));

  // Type-checking function for facet objects that are included in the filters array
  const isFacet = (object: any): object is Facet => 'queryParams' in object;

  const _RenderFilters = () => {
    // For each filter (or facet) do a type-check and recast as
    // Filter or Facet and then render a Dropdown or Button
    return Object.entries(filters).map(([fKey, filterOrFacet], idx) => {
      if (isFacet(filterOrFacet)) {
        const facet = filterOrFacet;
        return (
          <Button
            className="filter__facet"
            key={idx}
            onClick={() => updateCurrentFacet(fKey)}
            btnTheme="secondary"
            label={`${facet.title} (${facet?.pagingInfo?.totalCount})`}
            isHollow={currentFacet !== fKey}
          />
        );
      } else {
        const filter = filterOrFacet;
        return (
          <Dropdown
            className="filter__dropdown"
            key={idx}
            clearFilters={clearFilters}
            filterGroupKey={fKey}
            filters={filter?.items}
            title={filter.title || ''}
            updateSelectedFilters={updateSelectedFilters}
            _setHasDropdownFiltersSelected={_setHasDropdownFiltersSelected}
          />
        );
      }
    });
  };

  if (!filters || Object.keys(filters).length < 1) return null;
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
