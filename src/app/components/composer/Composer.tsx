import React from 'react';
import TextBlock from '../textBlock/TextBlock';
import ImageBlock from '../imageBlock/ImageBlock';
import QuoteBlock from '../quoteBlock/QuoteBlock';
import FeaturedProduct from '../featuredProduct/FeaturedProduct';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import Region from '~/layout/Region';

import { ComposerComponents } from '../../core/schema';

const Composer = (props: any) => {
  const RenderComponent = (props: any) => {
    switch (props._type) {
      case ComposerComponents.markup: {
        return (
          <Region width="small" margin="default">
            <TextBlock {...props} />
          </Region>
        );
      }
      case ComposerComponents.image: {
        return (
          <Region width="medium" margin="medium">
            <ImageBlock {...props} />
          </Region>
        );
      }
      case ComposerComponents.blockQuote: {
        return (
          <Region width="small" margin="medium">
            <QuoteBlock {...props} />
          </Region>
        );
      }
      case ComposerComponents.featuredProduct: {
        return (
          <Region width="medium" margin="medium">
            <FeaturedProduct {...props} />
          </Region>
        );
      }
      case ComposerComponents.video: {
        return (
          <Region width="medium" margin="large">
            <VideoPlayer {...props} />
          </Region>
        );
      }
    }
  };
  return <>{RenderComponent(props)}</>;
};

export default Composer;
