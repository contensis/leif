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
  const { meta, hero, cards, lead, composer, banner, form } = (mappedEntry ||
    {}) as Props;

  return (
    <MainLayout isLight={hero.imageUri || false}>
      <Metadata {...meta} />
      <LandingPageStyled>
        <LandingHero {...hero} />
        <CardRowSpotlight {...cards} />
        <Region margin="large" width="medium">
          <LeadParagraph {...lead} />
        </Region>
        <Composer {...composer} />
        <CTABanner {...banner} />
        <Form {...form} />
      </LandingPageStyled>
    </MainLayout>
  );
};

export default LandingPage;
