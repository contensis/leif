import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useArgs } from '@storybook/client-api';
import { SearchProps } from '@zengenti/contensis-react-base/search';

// Custom Hooks
import useProductFilters from '../hooks/useProductFilters';

// Components
import SearchStyled from '../Search.styled';
import SearchCard, {
  Props as SearchCardProps,
} from '~/components/searchCard/SearchCard';
import SearchFilters from '~/components/filters/Filters';
import SearchInput from '~/components/searchInput/SearchInput';
import Button from '~/components/button/Button';
import Card, { Props as CardProps } from '~/components/card/Card';
import NoResults from '~/components/noResults/NoResults';
import PromotedContent from '~/components/promotedContent/PromotedContent';

// Layout
import Region from '~/layout/Region';
import sampleProps from './fixtures/sample-props';
import { SearchFacets } from '~/core/schema';

export default {
  title: 'Search/SearchLayout',
  // component: SearchInput,
} as Meta;

const Template: Story<SearchProps<SearchCardProps | CardProps>> = args => {
  const {
    clearFilters,
    currentFacet,
    facets,
    featuredResults,
    filters,
    results,
    resultsInfo,
    searchTerm,
    updateSearchTerm,
    updateSelectedFilters,
  } = args;

  const [, updateArgs] = useArgs();
  const updateCurrentFacet = (facet: string) => {
    const sampleFacet = sampleProps.facets[facet];
    updateArgs({
      ...args,
      currentFacet: facet,
      results: sampleFacet.results,
      featuredResults: sampleFacet.featuredResults,
    });
  };

  const className = '';
  // Destructure the elements we've mapped into our resultsInfo prop
  const { hasLoadMore, hasResults, noResultsText, resultsText } =
    resultsInfo || {};
  const exploreMore = sampleProps.exploreMore;

  const isDesktop = true;
  const path = '/search';

  // Handles rendering different filters depending on the first selected filter option
  const productSearchFilters = useProductFilters(filters, path);
  return (
    <SearchStyled className={className} noResults={!hasResults}>
      <Region width="large" margin="none" padding="small">
        <h1 className="search__title">Search results</h1>
        <div className="search__header">
          <SearchFilters
            className="search__facets"
            clearFilters={clearFilters}
            currentFacet={currentFacet}
            // Combining the Facets and Filter objects into one for mobile.
            filters={isDesktop ? facets : { ...facets, ...filters }}
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
        {hasResults && hasLoadMore && (
          <Button
            className="search__load-more"
            type="button"
            label="Load more"
            icon="arrow-down"
            // onClick={() => _handleLoadMore(currentPageIndex + 1)}
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
  );
};

export const Primary = Template.bind({});

const firstFacet = sampleProps.facets[SearchFacets.all];
Primary.args = {
  currentFacet: SearchFacets.all,
  facets: sampleProps.facets,
  featuredResults: firstFacet.featuredResults,
  results: firstFacet.results,
  resultsInfo: sampleProps.resultsInfo,
  searchTerm: sampleProps.searchTerm,
  updateSearchTerm: (term: string) => alert(`Search for: '${term}'`),
};
