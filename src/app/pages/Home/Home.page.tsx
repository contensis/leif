import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from '~/core/routes/Loading';
// Components
import LandingHero from '~/components/landingHero/LandingHero';
// import Composer from '~/components/composer/ComposerWrapper';
import { Composer } from '~/dynamic/components';
import TestimonialSlider from '~/components/testimonialSlider/TestimonialSlider';
import CTABanner from '~/components/ctaBanner/CTABanner';
import Metadata from '~/components/metadata/Metadata';
import RelatedContent from '~/components/relatedContent/RelatedContent';

// Layout
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Mappers
import { useMinilist } from '@zengenti/contensis-react-base/search';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

// Models
import { Props } from './Home.d';

const Home = ({ mappedEntry }: Props) => {
  const { homeHeroProps, metadataProps, contentComposerProps, ctaBannerProps } =
    mappedEntry || {};

  // // Works but does not server side render
  // const Composer = Loadable({
  //   loader: () =>
  //     import(
  //       /* webpackChunkName: "composer-wrapper" */ '~/components/composer/ComposerWrapper'
  //     ),
  //   loading: Loading,
  // });

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
