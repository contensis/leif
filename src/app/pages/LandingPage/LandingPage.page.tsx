import React from 'react';

// Components
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';
// import Composer from '~/components/composer/ComposerWrapper';
import { Composer } from '~/dynamic/components';
import CTABanner from '~/components/ctaBanner/CTABanner';
import LandingHero from '~/components/landingHero/LandingHero';
import Metadata from '~/components/metadata/Metadata';
import CardRow from '~/components/cardRow/CardRow';
import Form from '~/components/form/Form';

// Layout
import LandingPageStyled from './LandingPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './LandingPage.d';

const LandingPage = ({ mappedEntry }: Props) => {
  const {
    landingPageHeroProps,
    leadParagraphProps,
    contentComposerProps,
    ctaBannerProps,
    relatedContentProps,
    metadataProps,
    formProps,
  } = (mappedEntry || {}) as Props;

  const { imageUri } = landingPageHeroProps || {};
  const isLight = imageUri ? true : false;

  return (
    <MainLayout isLight={isLight}>
      <Metadata {...metadataProps} />
      <LandingPageStyled>
        <LandingHero {...landingPageHeroProps} />
        <Region margin="large" width="full">
          <CardRow {...relatedContentProps} />
        </Region>
        <Region margin="large" width="medium">
          <LeadParagraph {...leadParagraphProps} />
        </Region>
        <Composer {...contentComposerProps} />
        <CTABanner {...ctaBannerProps} />
        <Form {...formProps} />
      </LandingPageStyled>
    </MainLayout>
  );
};

export default LandingPage;
