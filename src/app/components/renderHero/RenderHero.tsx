import React from 'react';
import Region from '~/layout/Region';

// import GenericHero from '../components/genericHero/GenericHero';

import ContentHero from '~/components/contentHero/ContentHero';
import GenericHero from '~/components/genericHero/GenericHero';
import LandingHero from '~/components/landingHero/LandingHero';

export const _RenderFunc = (props: any) => {
  if (!props) return null;
  switch (props.type) {
    case 'Landing hero':
      return <LandingHero {...props} />;
    case 'Image as background':
      return <ContentHero {...props} />;
    case 'Two column':
    case 'Full width':
    default:
      return (
        <Region className="generic-hero__region" width="large" margin="none">
          <GenericHero {...props} />
        </Region>
      );
  }
};

const RenderHero = (props: any) => {
  return <>{_RenderFunc(props)}</>;
};

export default RenderHero;
