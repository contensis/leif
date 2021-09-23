import React from 'react';
import { useMinilist } from '@zengenti/contensis-react-base/search';

// Components
import LandingHero from '~/components/landingHero/LandingHero';
import { Composer } from '~/dynamic/components';
import TestimonialSlider from '~/components/testimonialSlider/TestimonialSlider';
import CTABanner from '~/components/ctaBanner/CTABanner';
import Metadata from '~/components/metadata/Metadata';
import RelatedContent from '~/components/relatedContent/RelatedContent';

// Layout
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Mappers
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

// Models
import { Props, MappedProps } from './Home.d';

const Home = ({ mappedEntry }: Props) => {
  const { homeHeroProps, metadataProps, contentComposerProps, ctaBannerProps } =
    (mappedEntry || {}) as MappedProps;

  const { results: latestReviews } = useMinilist({
    id: 'latestReviews',
    mapper: mapEntriesToResults,
  });
  const { results: latestBlogs } = useMinilist({
    id: 'latestBlogs',
    mapper: mapEntriesToResults,
  });

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
