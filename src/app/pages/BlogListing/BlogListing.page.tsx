import React from 'react';

// Components
import GenericHero from '../../components/genericHero/GenericHero';

// Layout
import MainLayout from '../../layout/MainLayout';
import Region from '../../layout/Region';
import BlogListing from '../../components/blogListing/BlogListing';
import ListingContainer from '../../components/listing/Listing.container';
import CTABanner from '../../components/ctaBanner/CTABanner';
import BlogListingStyled from './BlogListing.styled';

interface Props {
  mappedEntry: any;
}

const BlogListingPage = ({
  mappedEntry: { title, featuredBlogProps, ctaBannerProps } = {},
}: Props) => {
  return (
    <MainLayout>
      <BlogListingStyled>
        <h1 className="blog-listing__title">{title}</h1>
        <Region width="large" margin="none">
          <GenericHero {...featuredBlogProps} />
        </Region>
        <ListingContainer>
          <BlogListing />
        </ListingContainer>
        <Region width="small" margin="large">
          <CTABanner {...ctaBannerProps} />
        </Region>
      </BlogListingStyled>
    </MainLayout>
  );
};

export default BlogListingPage;
