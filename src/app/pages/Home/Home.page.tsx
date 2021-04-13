import React, { useState, useEffect } from 'react';

// Components
import LandingHero from '~/components/landingHero/LandingHero';
import Composer from '~/components/composer/ComposerWrapper';
import TestimonialSlider from '~/components/testimonialSlider/TestimonialSlider';
import CTABanner from '~/components/ctaBanner/CTABanner';

// Layout
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Mappers
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

// Models
import { Props } from './Home.d';
import RelatedContent from '~/components/relatedContent/RelatedContent';
import Metadata from '~/components/metadata/Metadata';

const Home = ({ mappedEntry }: Props) => {
  const { homeHeroProps, metadataProps, contentComposerProps, ctaBannerProps } =
    mappedEntry || {};

  const [latestReviewsOptions, setLatestReviewsOptions] = useState<any>();
  const [latestBlogsOptions, setLatestBlogsOptions] = useState<any>();

  const { results: latestReviews } = useMinilist(latestReviewsOptions);
  const { results: latestBlogs } = useMinilist(latestBlogsOptions);

  useEffect(() => {
    setLatestReviewsOptions({
      id: 'latestReviews',
      mapper: mapEntriesToResults,
    });
  }, []);

  useEffect(() => {
    setLatestBlogsOptions({
      id: 'latestBlogs',
      mapper: mapEntriesToResults,
    });
  }, []);

  return (
    <MainLayout isLight={true}>
      <Metadata {...metadataProps} />
      <LandingHero {...homeHeroProps} />
      <Composer {...contentComposerProps} />
      <TestimonialSlider testimonials={latestReviews} />
      <Region width="full" margin="large">
        <RelatedContent
          title="Our blogs"
          results={latestBlogs}
          linkUri="/blog"
          linkLabel="View all blogs"
        />
      </Region>
      <Region margin="xlarge" width="msmall">
        <CTABanner {...ctaBannerProps} />
      </Region>
    </MainLayout>
  );
};

export default Home;
