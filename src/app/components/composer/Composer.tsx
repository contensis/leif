import React from 'react';

// Components
import {
  Accordion,
  Callout,
  ContentBlockRow,
  FeaturedProduct,
  IconList,
  ImageBlock,
  ProductSlider,
  PromotionalBlock,
  QuoteBlock,
  RelatedContent,
  TestimonialSlider,
  TextBlock,
  TwitterCard,
  VideoPlayer,
} from '~/dynamic/composer';

// Layout
import Region from '~/layout/Region';

import { Props } from './Composer.d';

const ComposerComponent = (composerProps: Props) => {
  const { isContentPage, ...props } = composerProps;

  if (props._type === 'accordionList') {
    return (
      <Region width={isContentPage ? 'msmall' : 'small'} margin="medium">
        <Accordion {...props} />
      </Region>
    );
  }
  if (props._type === 'blockQuote') {
    return (
      <Region width={isContentPage ? 'msmall' : 'small'} margin="medium">
        <QuoteBlock {...props} />
      </Region>
    );
  }
  if (
    props._type === 'bodyCopy' ||
    props._type === 'textBlock' ||
    props._type === 'markup'
  ) {
    return (
      <Region width={isContentPage ? 'msmall' : 'small'} margin="default">
        <TextBlock {...props} />
      </Region>
    );
  }
  if (props._type === 'callout') {
    return (
      <Region width={isContentPage ? 'msmall' : 'small'} margin="default">
        <Callout {...props} />
      </Region>
    );
  }
  if (props._type === 'contentBlockRow') {
    return (
      <Region width="full" margin="large">
        <ContentBlockRow {...props} />
      </Region>
    );
  }
  if (props._type === 'featuredBlogPosts') {
    return (
      <Region width="full" margin="large">
        <RelatedContent {...props} />
      </Region>
    );
  }
  if (props._type === 'featuredProduct') {
    return (
      <Region width="medium" margin="medium">
        <FeaturedProduct {...props} />
      </Region>
    );
  }
  if (props._type === 'featuredReviews') {
    return (
      <Region width="full" margin="large">
        <TestimonialSlider {...props} />
      </Region>
    );
  }
  if (props._type === 'iconList') {
    return (
      <Region width={isContentPage ? 'msmall' : 'small'} margin="default">
        <IconList {...props} />
      </Region>
    );
  }
  if (props._type === 'image') {
    return (
      <Region width="medium" margin="medium">
        <ImageBlock {...props} />
      </Region>
    );
  }
  if (
    props._type === 'productSlider' ||
    props._type === 'curatedProductSlider' ||
    props._type === 'filteredProductSlider'
  ) {
    return (
      <Region width="full" margin="none" padding="none">
        <ProductSlider {...props} />
      </Region>
    );
  }
  if (props._type === 'promotedProduct') {
    return (
      <Region width="full" margin="none">
        <PromotionalBlock {...props} />
      </Region>
    );
  }
  if (props._type === 'twitterEmbed') {
    return (
      <Region width={isContentPage ? 'msmall' : 'small'} margin="medium">
        <TwitterCard {...props} />
      </Region>
    );
  }
  if (props._type === 'video') {
    return (
      <Region width={isContentPage ? 'msmall' : 'medium'} margin="large">
        <VideoPlayer {...props} />
      </Region>
    );
  }
  return <p>Component not found</p>;
};

export default ComposerComponent;
