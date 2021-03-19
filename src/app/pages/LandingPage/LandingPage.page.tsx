import React from 'react';

// Components
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';

// Utils
// import { RenderHero } from '../../utils/renderHero';

// Layout
import LandingPageStyled from './LandingPage.styled';
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './LandingPage.d';

const LandingPage = ({ mappedEntry }: Props) => {
  const {
    // contentHeroProps,
    leadParagraphProps,
  } = mappedEntry || {};
  return (
    <MainLayout>
      <LandingPageStyled>
        {/* {RenderHero(contentHeroProps)} */}
        <Region margin="none" width="msmall">
          <LeadParagraph {...leadParagraphProps} />
        </Region>
      </LandingPageStyled>
    </MainLayout>
  );
};

export default LandingPage;
