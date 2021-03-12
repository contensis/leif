import React from 'react';

// Components
import GenericHero from '../../components/genericHero/GenericHero';

// Layout
import MainLayout from '../../layout/MainLayout';
import Region from '../../layout/Region';
import BlogListing from '../../components/blogListing/BlogListing';
import ListingContainer from '../../components/listing/Listing.container';
import CTABanner from '../../components/ctaBanner/CTABanner';

interface Props {
  mappedEntry: any;
}

const BlogListingPage = ({
  mappedEntry: { title, featuredBlogProps, ctaBannerProps } = {},
}: Props) => {
  return (
    <MainLayout>
      <Region width="large" margin="medium" align="center">
        <h1 className="blog-listing__title">{title}</h1>
      </Region>
      <Region width="large" margin="large">
        <GenericHero {...featuredBlogProps} />
      </Region>
      <ListingContainer>
        <BlogListing />
      </ListingContainer>
      <Region width="small" margin="large">
        <CTABanner {...ctaBannerProps} />
      </Region>
    </MainLayout>
  );
};

export default BlogListingPage;
