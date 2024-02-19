import React from 'react';

// Components
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';
import Canvas from '~/components/canvas/Canvas';
import { Composer } from '~/dynamic/components';
import CTABanner from '~/components/ctaBanner/CTABanner';
import SocialShare from '~/components/socialShare/SocialShare';
import PromotedContent from '~/components/promotedContent/PromotedContent';
import ContentHero from '~/components/contentHero/ContentHero';
import Metadata from '~/components/metadata/Metadata';
import Form from '~/components/form/Form';
import RelatedLinks from '~/components/relatedLinks/RelatedLinks';

// Layout
import ContentPageStyled from './ContentPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './ContentPage.d';
import Sidebar from '~/components/sidebar/Sidebar';

const ContentPage = ({ mappedEntry }: Props) => {
  const {
    contentHeroProps,
    leadParagraphProps,
    composerProps,
    ctaBannerProps,
    promotedContentProps,
    metadataProps,
    formProps,
    canvasProps,
  } = mappedEntry || {};

  const hasImage = contentHeroProps?.image?.src;
  const hasIllustration = contentHeroProps?.hasIllustration;
  const noCanvas =
    !canvasProps?.data ||
    (canvasProps?.data.length === 1 && !canvasProps?.data[0].value?.length);

  return (
    <MainLayout isLight={!!hasImage}>
      <Metadata {...metadataProps} />
      <ContentPageStyled
        data-content={
          contentHeroProps && (hasIllustration || !hasImage)
            ? 'default'
            : 'hero-image'
        }
      >
        {contentHeroProps && <ContentHero {...contentHeroProps} />}
        <div className="content-page__wrapper">
          <div>
            {noCanvas ? (
              <>
                <Region margin="none" width="msmall">
                  <LeadParagraph {...leadParagraphProps} />
                </Region>
                <Composer {...composerProps} />
              </>
            ) : (
              <Canvas {...canvasProps} />
            )}
            <Region margin="large" width="msmall">
              <CTABanner {...ctaBannerProps} />
            </Region>
          </div>
          <Sidebar />
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
