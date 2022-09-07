import React from 'react';

// Components
import { Composer } from '~/dynamic/components';
import Metadata from '~/components/metadata/Metadata';
import CTABanner from '~/components/ctaBanner/CTABanner';
import GenericHero from '~/components/genericHero/GenericHero';
import LeadParagraph from '~/components/leadParagraph/LeadParagraph';
import BlogInformation from '~/components/blogInformation/BlogInformation';
import RelatedContent from '~/components/relatedContent/RelatedContent';

// Layout
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './BlogPost.d';

const BlogPost = ({ mappedEntry }: Props) => {
  const {
    metadataProps,
    blogHeroProps,
    blogInformationProps,
    leadParagraphProps,
    contentComposerProps,
    ctaBannerProps,
    relatedContentProps,
  } = mappedEntry || {};
  return (
    <MainLayout>
      <Metadata {...metadataProps} />
      <Region width="large" margin="none">
        <GenericHero {...blogHeroProps} />
      </Region>
      <Region width="small" margin="default">
        <BlogInformation {...blogInformationProps} />
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

export default BlogPost;
