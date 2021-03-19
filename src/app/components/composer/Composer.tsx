import React from 'react';

// Components
import TextBlock from '../textBlock/TextBlock';
import ImageBlock from '../imageBlock/ImageBlock';
import QuoteBlock from '../quoteBlock/QuoteBlock';
import FeaturedProduct from '../featuredProduct/FeaturedProduct';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import Callout from '../callout/Callout';
import IconList from '../iconList/IconList';
import Accordion from '../accordion/Accordion';
import TwitterCard from '../twitterCard/TwitterCard';

// Layout
import Region from '~/layout/Region';

// Schema
import { ComposerComponents } from '../../core/schema';

const Composer = (props: any) => {
  const RenderComponent = (props: any) => {
    const { isLandingPage } = props;

    switch (props._type) {
      case ComposerComponents.twitterEmbed: {
        return (
          <Region width={isLandingPage ? 'msmall' : 'small'} margin="medium">
            <TwitterCard {...props} />
          </Region>
        );
      }
      case ComposerComponents.accordionList: {
        return (
          <Region width={isLandingPage ? 'msmall' : 'small'} margin="medium">
            <Accordion {...props} />
          </Region>
        );
      }
      case ComposerComponents.iconList: {
        return (
          <Region width={isLandingPage ? 'msmall' : 'small'} margin="default">
            <IconList {...props} />
          </Region>
        );
      }
      case ComposerComponents.textBlock:
      case ComposerComponents.markup: {
        return (
          <Region width={isLandingPage ? 'msmall' : 'small'} margin="default">
            <TextBlock {...props} />
          </Region>
        );
      }
      case ComposerComponents.callout: {
        return (
          <Region width={isLandingPage ? 'msmall' : 'small'} margin="default">
            <Callout {...props} />
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
          <Region width={isLandingPage ? 'msmall' : 'small'} margin="medium">
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
          <Region width={isLandingPage ? 'msmall' : 'medium'} margin="large">
            <VideoPlayer {...props} />
          </Region>
        );
      }
    }
  };
  return <>{RenderComponent(props)}</>;
};

export default Composer;
