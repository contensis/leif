import React from 'react';

// Components
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';
import RenderHero from '~/components/renderHero/RenderHero';

// Layout
import LandingPageStyled from './LandingPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './LandingPage.d';

const LandingPage = ({ mappedEntry }: Props) => {
  const { landingPageHeroProps, leadParagraphProps } = mappedEntry || {};
  console.info({ mappedEntry });

  const { type } = landingPageHeroProps;
  const isLight = type === 'Landing hero' || type === 'Image as background';
  return (
    <MainLayout isLight={isLight}>
      <LandingPageStyled>
        <RenderHero {...landingPageHeroProps} />
        <Region margin="large" width="medium">
          <LeadParagraph {...leadParagraphProps} />
        </Region>
      </LandingPageStyled>
    </MainLayout>
  );
};

export default LandingPage;
