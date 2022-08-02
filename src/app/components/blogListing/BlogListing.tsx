import React, { useState, useEffect } from 'react';

import BlogListingStyled from './BlogListing.styled';

import Card from '../card/Card';
import Filters from '../filters/Filters';
import Button from '../button/Button';
import NoResults from '../noResults/NoResults';

import { ListingProps } from '@zengenti/contensis-react-base/search';

const BlogListing = ({
  results,
  filters,
  updateSelectedFilters,
  updatePageIndex,
  updateCurrentFacet,
  paging,
  clearFilters,
}: ListingProps) => {
  const [windowOffset, setWindowOffset] = useState<number>(0);

  /* eslint-disable */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, windowOffset);
    }
  }, []);
  /* eslint-enable */

  const _handleLoadMore = (pageIndex: number) => {
    if (typeof window != 'undefined') {
      setWindowOffset(window.pageYOffset);
    }
    updatePageIndex(pageIndex);
  };

  const { pageIndex, pageCount } = paging;
  const hasLoadMore =
    pageIndex === null || pageCount === null
      ? false
      : pageIndex < pageCount - 1;

  const hasResults = results && results.length >= 1;
  return (
    <BlogListingStyled>
      <Filters
        className="blog-listing__filters"
        filters={filters}
        updateSelectedFilters={updateSelectedFilters}
        updateCurrentFacet={updateCurrentFacet}
        clearFilters={clearFilters}
        hasResetBtn={true}
      />
      {hasResults && (
        <div className="blog-listing__results">
          {results.map((res: any, idx: number) => (
            <Card key={idx} {...res} className="blog-listing__result" />
          ))}
        </div>
      )}
      {!hasResults && (
        <NoResults
          className="blog-listing__no-results"
          title="Sorry, nothing matches your search"
          text="Try resetting any filters, checking for typos, or adjusting your search term."
        />
      )}
      {hasLoadMore && (
        <Button
          className="blog-listing__load-more"
          type="button"
          label="Load more"
          icon="arrow-down"
          onClick={() => _handleLoadMore(pageIndex + 1)}
          btnTheme="secondary"
          isHollow
        />
      )}
    </BlogListingStyled>
  );
};

export default BlogListing;
