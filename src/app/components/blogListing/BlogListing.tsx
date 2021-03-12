import React, { useState, useEffect } from 'react';

import BlogListingStyled from './BlogListing.styled';

import Card from '../card/Card';
import Filters from '../filters/Filters';
import Button from '../button/Button';

interface Props {
  results?: any;
  filters?: any;
  facets?: any;
  paging?: any;
  updateSelectedFilters: (ev: any) => void;
  updatePageIndex: (ev: number) => void;
  clearFilters: () => void;
}

const BlogListing = ({
  results,
  filters,
  updateSelectedFilters,
  updatePageIndex,
  paging,
  clearFilters,
}: Props) => {
  const [windowOffset, setWindowOffset] = useState<number>(0);

  /* eslint-disable */
  useEffect(() => {
    if (typeof window != 'undefined') {
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

  if (!results || results.length < 1) return null;
  return (
    <BlogListingStyled>
      <Filters
        className="blog-listing__filters"
        filters={filters}
        updateSelectedFilters={updateSelectedFilters}
        clearFilters={clearFilters}
      />
      <div className="blog-listing__results">
        {results.map((res: any, idx: number) => (
          <Card key={idx} {...res} />
        ))}
      </div>
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
