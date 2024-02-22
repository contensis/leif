import React from 'react';

// Components
import Canvas from '~/components/canvas/Canvas';
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
import { Composer } from '~/dynamic/components';
import BlogPostStyled from './BlogPost.styled';

const BlogPost = ({ mappedEntry }: Props) => {
  const {
    metadataProps,
    heroProps,
    blogInformationProps,
    leadParagraphProps,
    canvasProps,
    composerProps,
    ctaBannerProps,
    relatedContentProps,
  } = mappedEntry || {};

  const noCanvas =
    !canvasProps?.data ||
    (canvasProps?.data.length === 1 && !canvasProps?.data[0].value?.length);

  return (
    <>
      <Metadata {...metadataProps} />
      <MainLayout>
        <BlogPostStyled>
          <GenericHero {...heroProps} />
          <Region width="small" margin="default">
            <BlogInformation {...blogInformationProps} />
          </Region>
          {noCanvas ? (
            <>
              <Region width="small" margin="default">
                <LeadParagraph {...leadParagraphProps} />
              </Region>
              <Composer {...composerProps} />
            </>
          ) : (
            <Canvas {...canvasProps} />
          )}
          <Region width="small" margin="large">
            <CTABanner {...ctaBannerProps} />
          </Region>
          <RelatedContent {...relatedContentProps} />
        </BlogPostStyled>
      </MainLayout>
    </>
  );
};

export default BlogPost;
