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
import { useSelector } from 'react-redux';
import { makeSelectHasResults } from '~/core/redux/custom/ui/selectors';

const BlogListingPage = ({ mappedEntry }: Props) => {
  const { title, featuredBlogProps, ctaBannerProps, metadataProps } =
    mappedEntry || {};

  const selectHasResults = useSelector(makeSelectHasResults);
  const hasResults = useSelector(selectHasResults);

  return (
    <MainLayout>
      <Metadata {...metadataProps} />
      <BlogListingStyled>
        <h1 className="blog-listing__title">{title}</h1>
        <Region width="large" margin="none">
          <GenericHero {...featuredBlogProps} />
        </Region>
        <ListingContainer>
          <BlogListing />
        </ListingContainer>
        {hasResults && (
          <Region width="small" margin="large">
            <CTABanner {...ctaBannerProps} />
          </Region>
        )}
      </BlogListingStyled>
    </MainLayout>
  );
};

export default BlogListingPage;
