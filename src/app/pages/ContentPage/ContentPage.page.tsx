import React from 'react';

// Components
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';
import RelatedLinks from '~/components/relatedLinks/RelatedLinks';
import Composer from '~/components/composer/ComposerWrapper';
import CTABanner from '~/components/ctaBanner/CTABanner';
import SocialShare from '~/components/socialShare/SocialShare';
import ExploreMore from '~/components/exploreMore/ExploreMore';

// Utils
import { RenderHero } from '../../utils/renderHero';

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
    relatedLinksProps,
    contentComposerProps,
    ctaBannerProps,
    exploreMoreProps,
  } = mappedEntry || {};
  return (
    <MainLayout>
      <ContentPageStyled>
        {RenderHero(contentHeroProps)}
        <Region
          className="content-page__body-content"
          margin="none"
          padding="none"
          width="full"
        >
          <div className="content-page__content">
            <Region margin="none" width="msmall">
              <LeadParagraph {...leadParagraphProps} />
            </Region>
            <Composer items={contentComposerProps} isContentPage={true} />
            <Region margin="large" width="msmall">
              <CTABanner {...ctaBannerProps} />
            </Region>
          </div>
          {relatedLinksProps && (
            <aside className="content-page__related-links">
              <SocialShare className="content-page__social-share" />
              <RelatedLinks {...relatedLinksProps} />
            </aside>
          )}
        </Region>
        <Region width="full" margin="default">
          <ExploreMore {...exploreMoreProps} />
        </Region>
      </ContentPageStyled>
    </MainLayout>
  );
};

export default ContentPage;
