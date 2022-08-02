import React from 'react';

// Components
import GenericHero from '../../components/genericHero/GenericHero';
import BlogListing from '../../components/blogListing/BlogListing';
import ListingContainer from '../../components/listing/Listing.container';
import CTABanner from '../../components/ctaBanner/CTABanner';
import Metadata from '~/components/metadata/Metadata';

// Layout
import MainLayout from '../../layout/MainLayout';
import Region from '../../layout/Region';
import BlogListingStyled from './BlogListing.styled';

// Models
import { Props } from './BlogListing.d';
import { ListingProps } from '@zengenti/contensis-react-base/search';

const BlogListingPage = ({ mappedEntry }: Props) => {
  const { title, featuredBlogProps, ctaBannerProps, metadataProps } =
    mappedEntry || {};

  return (
    <MainLayout>
      <Metadata {...metadataProps} />
      <BlogListingStyled>
        <h1 className="blog-listing__title">{title}</h1>
        <Region width="large" margin="none">
          <GenericHero {...featuredBlogProps} />
        </Region>
        <ListingContainer>
          {(listingProps: ListingProps) => (
            <>
              <BlogListing {...listingProps} />
              {listingProps.results && listingProps.results.length > 0 && (
                <Region width="small" margin="large">
                  <CTABanner {...ctaBannerProps} />
                </Region>
              )}
            </>
          )}
        </ListingContainer>
      </BlogListingStyled>
    </MainLayout>
  );
};

export default BlogListingPage;
