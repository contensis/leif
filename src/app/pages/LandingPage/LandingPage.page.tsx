import React from 'react';

// Components
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';
import { Composer } from '~/dynamic/components';
import CTABanner from '~/components/ctaBanner/CTABanner';
import LandingHero from '~/components/landingHero/LandingHero';
import Metadata from '~/components/metadata/Metadata';
import Form from '~/components/form/Form';
import CardRowSpotlight from '~/components/cardRowSpotlight/CardRowSpotlight';

// Layout
import LandingPageStyled from './LandingPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './LandingPage.d';

const LandingPage = ({ mappedEntry }: Props) => {
  const {
    metaProps,
    heroProps,
    cardRowProps,
    leadParagraphProps,
    contentComposerProps,
    ctaBannerProps,
    formProps,
  } = (mappedEntry || {}) as Props;

  console.info({ cardRowProps });

  return (
    <MainLayout isLight={heroProps.imageUri || false}>
      <Metadata {...metaProps} />
      <LandingPageStyled>
        <LandingHero {...heroProps} />
        <CardRowSpotlight {...cardRowProps} />
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
