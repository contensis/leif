import React from 'react';

import searchMappers from './transformations';
import { useSelector } from 'react-redux';
import { withSearch, SearchProps } from '@zengenti/contensis-react-base/search';

import { SearchFacets } from '~/core/schema';
import { selectCurrentPath } from '~/core/redux/selectors';
import { selectScreenSize } from '~/redux/ui/selectors';

// Components
import SearchStyled from './Search.styled';
import SearchCard, {
  Props as SearchCardProps,
} from '~/components/searchCard/SearchCard';
import SearchFilters from '~/components/filters/Filters';
import SearchInput from '~/components/searchInput/SearchInput';
import Button from '~/components/button/Button';
import Metadata from '~/components/metadata/Metadata';
import Card, { Props as CardProps } from '~/components/card/Card';
import NoResults from '~/components/noResults/NoResults';
import PromotedContent from '~/components/promotedContent/PromotedContent';

// Layout
import Region from '~/layout/Region';
import MainLayout from '~/layout/MainLayout';
import useProductFilters from './hooks/useProductFilters';
import useWindowScroll from './hooks/useWindowScroll';
import useExploreMore from './hooks/useExploreMore';

interface Props {
  className?: string;
}

// The withSearch HoC decorator below will inject the SearchProps
// in addition to our component Props
const SearchContainer: React.FC<
  Props & SearchProps<SearchCardProps | CardProps>
> = ({
  className,
  clearFilters,
  currentFacet,
  currentPageIndex,
  facets,
  featuredResults,
  filters,
  results,
  resultsInfo,
  searchTerm,
  updateCurrentFacet,
  updatePageIndex,
  updateSearchTerm,
  updateSelectedFilters,
}) => {
  const [, setWindowOffset] = useWindowScroll();
  const path = useSelector(selectCurrentPath) as string;
  const screenSize = useSelector(selectScreenSize);
  const isDesktop = screenSize >= 1024 ? true : false;

  // Destructure the elements we've mapped into our resultsInfo prop
  const { hasLoadMore, hasResults, noResultsText, resultsText } =
    resultsInfo || {};

  // Populates 'Explore more' promo content if no main search results
  const exploreMore = useExploreMore(hasResults);

  // Handles rendering different filters depending on the first selected filter option
  const productSearchFilters = useProductFilters(filters);

  // Search action handlers
  const _handleLoadMore = (pageIndex: number) => {
    if (typeof window != 'undefined') {
      setWindowOffset(window.pageYOffset);
    }
    updatePageIndex(pageIndex);
  };

  return (
    <MainLayout>
      <Metadata
        title="Search our site"
        image="/image-library/default-images/leif-fallback.png"
      />
      <SearchStyled className={className} noResults={!hasResults}>
        <Region width="large" margin="none" padding="small">
          <h1 className="search__title">Search results</h1>
          <div className="search__header">
            <SearchFilters
              className="search__facets"
              clearFilters={clearFilters}
              currentFacet={currentFacet}
              // Combining the Facets and Filter objects into one for mobile.
              filters={
                isDesktop ? facets : { ...facets, ...productSearchFilters }
              }
              hasResetBtn={isDesktop ? false : true}
              updateCurrentFacet={updateCurrentFacet}
              updateSelectedFilters={updateSelectedFilters}
            />
            <SearchInput searchTerm={searchTerm} _func={updateSearchTerm} />
          </div>
          {hasResults && resultsText && (
            <p
              className="search__results-info--text"
              dangerouslySetInnerHTML={{ __html: resultsText }}
            />
          )}
          <div className="search__results-wrapper">
            <div className="search__results">
              {hasResults &&
                results.map((result, idx) => (
                  <SearchCard
                    className="search__result-card"
                    key={idx}
                    {...result}
                  />
                ))}
              {!hasResults && (
                <NoResults
                  title={noResultsText.title}
                  text={noResultsText.text}
                />
              )}
            </div>
            {isDesktop && hasResults && (
              <>
                {currentFacet !== SearchFacets.all && (
                  <SearchFilters
                    className="search__filters"
                    clearFilters={clearFilters}
                    currentFacet={currentFacet}
                    filters={productSearchFilters}
                    hasResetBtn={true}
                    updateCurrentFacet={updateCurrentFacet}
                    updateSelectedFilters={updateSelectedFilters}
                  />
                )}
                {hasResults &&
                  currentFacet === SearchFacets.all &&
                  featuredResults.length > 0 && (
                    <div className="search__featured-products">
                      {featuredResults.slice(-2).map((featuredProduct, idx) => (
                        <Card
                          key={idx}
                          {...(featuredProduct as CardProps)}
                          path={path}
                        />
                      ))}
                    </div>
                  )}
              </>
            )}
          </div>
          {hasLoadMore && (
            <Button
              className="search__load-more"
              type="button"
              label="Load more"
              icon="arrow-down"
              onClick={() => _handleLoadMore(currentPageIndex + 1)}
              btnTheme="secondary"
              isHollow
            />
          )}
        </Region>
        {!hasResults && (
          <PromotedContent
            className="search__explore-more"
            title="Explore more"
            results={exploreMore}
          />
        )}
      </SearchStyled>
    </MainLayout>
  );
};

export default withSearch(searchMappers)(SearchContainer);
