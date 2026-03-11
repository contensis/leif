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
import PlantCategoryGrid from '~/components/plantCategoryGrid/PlantCategoryGrid';
import { mappers } from '~/components/search';

// Models
import { Props, MappedProps } from './Home.d';
import HomepageStyled from './Homepage.styled';

const PLANT_CATEGORIES = [
  {
    title: 'Low Light',
    description: 'Thrives in shady spots and north-facing rooms',
    image: {
      src: '/static/img/categories/low-light.jpg',
      alt: 'A snake plant in a dark corner',
    },
    path: '/collections/low-light',
  },
  {
    title: 'Easy Care',
    description: 'Perfect for beginners and busy plant parents',
    image: {
      src: '/static/img/categories/easy-care.jpg',
      alt: 'A pothos plant on a shelf',
    },
    path: '/collections/easy-care',
  },
  {
    title: 'Pet-Friendly',
    description: 'Safe for cats, dogs and curious noses',
    image: {
      src: '/static/img/categories/pet-friendly.jpg',
      alt: 'A spider plant in a hanging planter',
    },
    path: '/collections/pet-friendly',
  },
];

const Home = ({ mappedEntry }: Props) => {
  const { meta, hero, composer, banner } = (mappedEntry || {}) as MappedProps;

  const reviews = useMinilist({ id: 'latestReviews', mapper: mappers.results });
  const blogs = useMinilist({ id: 'latestBlogs', mapper: mappers.results });

  return (
    <MainLayout isLight={false}>
      <HomepageStyled>
        <Metadata {...meta} />
        <LandingHero {...hero} />
        <PlantCategoryGrid
          title="Find your perfect plant"
          categories={PLANT_CATEGORIES}
        />
        <Composer {...composer} />
        <TestimonialSlider testimonials={reviews.results} />
        <CardRow
          title="Our blogs"
          cards={blogs.results}
          btn={{ label: 'View all blogs', path: '/blog' }}
        />
        <CTABanner {...banner} />
      </HomepageStyled>
    </MainLayout>
  );
};

export default Home;
