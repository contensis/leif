import React from 'react';

// Components
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';
import RelatedLinks from '~/components/relatedLinks/RelatedLinks.container';
// import Composer from '~/components/composer/ComposerWrapper';
import { Composer } from '~/dynamic/components';
import CTABanner from '~/components/ctaBanner/CTABanner';
import SocialShare from '~/components/socialShare/SocialShare';
import PromotedContent from '~/components/promotedContent/PromotedContent';
import ContentHero from '~/components/contentHero/ContentHero';
import Metadata from '~/components/metadata/Metadata';
import Form from '~/components/form/Form';

// Layout
import ContentPageStyled from './ContentPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './ContentPage.d';

const ContentPage = ({ mappedEntry }: Props) => {
  const {
    contentHeroProps,
    leadParagraphProps,
    contentComposerProps,
    ctaBannerProps,
    promotedContentProps,
    metadataProps,
    formProps,
  } = mappedEntry || {};

  const { bgImageUri, hasIllustration } = contentHeroProps;
  const isLight = bgImageUri ? true : false;

  return (
    <MainLayout isLight={isLight}>
      <Metadata {...metadataProps} />
      <ContentPageStyled hasContentCentered={hasIllustration || !bgImageUri}>
        <ContentHero {...contentHeroProps} />
        <div className="content-page__body-content">
          <div className="content-page__content">
            <Region margin="none" width="msmall">
              <LeadParagraph {...leadParagraphProps} />
            </Region>
            <Composer {...contentComposerProps} />
            <Region margin="large" width="msmall">
              <CTABanner {...ctaBannerProps} />
            </Region>
          </div>
          <aside className="content-page__related-links">
            <SocialShare className="content-page__social-share" />
            <RelatedLinks />
          </aside>
        </div>
        <Region width="full" margin="default">
          <PromotedContent {...promotedContentProps} />
        </Region>
        <Form {...formProps} />
      </ContentPageStyled>
    </MainLayout>
  );
};

export default ContentPage;
