import React from 'react';
import { useMinilist } from '@zengenti/contensis-react-base/search';

// Components
import LandingHero from '~/components/landingHero/LandingHero';
import { Composer } from '~/dynamic/components';
import TestimonialSlider from '~/components/testimonialSlider/TestimonialSlider';
import CTABanner from '~/components/ctaBanner/CTABanner';
import Metadata from '~/components/metadata/Metadata';
import MainLayout from '~/layout/MainLayout';
import CardRow from '~/components/cardRow/CardRow';
import { mappers } from '~/components/search';

// Models
import { Props, MappedProps } from './Home.d';
import HomepageStyled from './Homepage.styled';

const Home = ({ mappedEntry }: Props) => {
  const { heroProps, metaProps, composerProps, bannerProps } = (mappedEntry ||
    {}) as MappedProps;

  const reviews = useMinilist({ id: 'latestReviews', mapper: mappers.results });
  const blogs = useMinilist({ id: 'latestBlogs', mapper: mappers.results });

  return (
    <MainLayout isLight={true}>
      <HomepageStyled>
        <Metadata {...metaProps} />
        <LandingHero {...heroProps} />
        <Composer {...composerProps} />
        <TestimonialSlider testimonials={reviews.results} />
        <CardRow
          title="Our blogs"
          cards={blogs.results}
          btn={{ label: 'View all blogs', path: '/blog' }}
        />
        <CTABanner {...bannerProps} />
      </HomepageStyled>
    </MainLayout>
  );
};

export default Home;
