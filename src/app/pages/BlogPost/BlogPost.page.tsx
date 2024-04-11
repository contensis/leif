import React from 'react';

// Components
import Canvas from '~/components/canvas/Canvas';
import Metadata from '~/components/metadata/Metadata';
import CTABanner from '~/components/ctaBanner/CTABanner';
import GenericHero from '~/components/genericHero/GenericHero';
import BlogInformation from '~/components/blogInformation/BlogInformation';
import RelatedContent from '~/components/relatedContent/RelatedContent';

// Layout
import MainLayout from '~/layout/MainLayout';
import Region from '~/layout/Region';

// Models
import { Props } from './BlogPost.d';
import BlogPostStyled from './BlogPost.styled';

const BlogPost = ({ mappedEntry }: Props) => {
  const { meta, hero, information, canvas, banner, content } =
    mappedEntry || {};

  return (
    <>
      <Metadata {...meta} />
      <MainLayout>
        <BlogPostStyled>
          <GenericHero {...hero} />
          <Region width="small" margin="default">
            <BlogInformation {...information} />
          </Region>
          <Canvas {...canvas} />
          <Region width="small" margin="large">
            <CTABanner {...banner} />
          </Region>
          <RelatedContent {...content} />
        </BlogPostStyled>
      </MainLayout>
    </>
  );
};

export default BlogPost;
