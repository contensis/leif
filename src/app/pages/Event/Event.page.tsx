import React from 'react';

// Components
import { Composer } from '~/dynamic/components';
import Metadata from '~/components/metadata/Metadata';
import CTABanner from '~/components/ctaBanner/CTABanner';
import GenericHero from '~/components/genericHero/GenericHero';
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';
import EventInformation from '~/components/eventInformation/EventInformation';
import RelatedContent from '~/components/relatedContent/RelatedContent';

// Layout
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './Event';

const Event = ({ mappedEntry }: Props) => {
  const {
    metadataProps,
    eventInformationProps,
    eventHeroProps,
    ctaBannerProps,
    leadParagraphProps,
    contentComposerProps,
    relatedContentProps,
  } = mappedEntry || {};
  console.info({ mappedEntry });
  return (
    <MainLayout>
      <Metadata {...metadataProps} />
      <Region width="large" margin="none">
        <GenericHero {...eventHeroProps} />
      </Region>
      <Region width="small" margin="default">
        <EventInformation {...eventInformationProps} />
      </Region>
      <Region width="small" margin="default">
        <LeadParagraph {...leadParagraphProps} />
      </Region>
      <Composer {...contentComposerProps} />
      <Region width="small" margin="large">
        <CTABanner {...ctaBannerProps} />
      </Region>
      <Region width="default" margin="default">
        <RelatedContent {...relatedContentProps} />
      </Region>
    </MainLayout>
  );
};

export default Event;
