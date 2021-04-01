import React from 'react';

// Components
import LandingHero from '~/components/landingHero/LandingHero';
import Composer from '~/components/composer/ComposerWrapper';

// Layout
import MainLayout from '~/layout/MainLayout';
// import Region from '~/layout/Region';

// Models
import { Props } from './Home.d';

const Home = ({ mappedEntry }: Props) => {
  const { homeHeroProps, contentComposerProps } = mappedEntry || {};
  console.info({ contentComposerProps });
  return (
    <MainLayout isLight={true}>
      <LandingHero {...homeHeroProps} />
      <Composer {...contentComposerProps} />
    </MainLayout>
  );
};

export default Home;
