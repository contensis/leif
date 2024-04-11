import React from 'react';

// Components
import Canvas from '~/components/canvas/Canvas';
import CTABanner from '~/components/ctaBanner/CTABanner';
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
import Sidebar from '~/components/sidebar/Sidebar';

const ContentPage = ({ mappedEntry }: Props) => {
  const { meta, hero, banner, promoted, form, canvas } = mappedEntry || {};

  const hasImage = hero?.image?.src;
  const hasIllustration = hero?.hasIllustration;

  return (
    <MainLayout isLight={!!hasImage}>
      <Metadata {...meta} />
      <ContentPageStyled
        data-content={
          hero && (hasIllustration || !hasImage) ? 'default' : 'hero-image'
        }
      >
        {hero && <ContentHero {...hero} />}
        <div className="content-page__wrapper">
          <div>
            <Canvas {...canvas} />
            <Region margin="large" width="msmall">
              <CTABanner {...banner} />
            </Region>
          </div>
          <Sidebar />
        </div>
        <Region width="full" margin="default">
          <PromotedContent {...promoted} />
        </Region>
        <Form {...form} />
      </ContentPageStyled>
    </MainLayout>
  );
};

export default ContentPage;
