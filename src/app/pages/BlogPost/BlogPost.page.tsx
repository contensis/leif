import React from 'react';

// Components
import BlogHero from '../../components/genericHero/GenericHero';
import BlogInformation from '../../components/blogInformation/BlogInformation';
import LeadParagraph from '../../components/leadParagraph/LeadParagraph';
import Composer from '../../components/composer/ComposerWrapper';
import CTABanner from '../../components/ctaBanner/CTABanner';
import RelatedContent from '../../components/relatedContent/RelatedContent';

// Layout
import MainLayout from '../../layout/MainLayout';
import Region from '~/layout/Region';

interface Props {
  mappedEntry: any;
}

const BlogPost = ({
  mappedEntry: {
    blogInformationProps,
    blogHeroProps,
    ctaBannerProps,
    leadParagraphProps,
    contentComposerProps,
    relatedContentProps,
  } = {},
}: Props) => {
  return (
    <MainLayout>
      <Region width="large" margin="none">
        <BlogHero {...blogHeroProps} />
      </Region>
      <Region width="small" margin="default">
        <BlogInformation {...blogInformationProps} />
      </Region>
      <Region width="small" margin="default">
        <LeadParagraph {...leadParagraphProps} />
      </Region>
      <Composer items={contentComposerProps} />
      <Region width="small" margin="large">
        <CTABanner {...ctaBannerProps} />
      </Region>
      <Region width="default" margin="default">
        <RelatedContent {...relatedContentProps} />
      </Region>
    </MainLayout>
  );
};

export default BlogPost;
