import React from 'react';
import Region from '~/layout/Region';

// import GenericHero from '../components/genericHero/GenericHero';

import ContentHero from '~/components/contentHero/ContentHero';
import GenericHero from '~/components/genericHero/GenericHero';
import LandingHero from '~/components/landingHero/LandingHero';

export const RenderHero = (props: any) => {
  if (!props) return null;
  const { type, summary } = props;
  const _type = summary ? 'Landing hero' : type;

  switch (_type) {
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
