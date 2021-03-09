import React from 'react';
import TextBlock from '../textBlock/TextBlock';
import ImageBlock from '../imageBlock/ImageBlock';
import QuoteBlock from '../quoteBlock/QuoteBlock';
import FeaturedProduct from '../featuredProduct/FeaturedProduct';
import VideoPlayer from '../videoPlayer/VideoPlayer';
import Region from '~/layout/Region';

interface Props {
  fields: any | any[];
}

const Composer = ({ fields }: Props) => {
  if (!fields) return null;

  return fields.map((field:any, idx:number) => {
    switch (field.type) {
      case 'markup': {
        return (
          <Region key={`region-${idx}`} width="small" margin="default">
            <TextBlock text={field.value} />
          </Region>
        );
      }
      case 'image': {
        return (
          <Region key={`region-${idx}`} width="medium" margin="medium">
            <ImageBlock image={field.value} title={field.value.altText} text={field.value.caption} key={idx} />
          </Region>
        );
      }
      case 'blockQuote': {
        return (
          <Region key={`region-${idx}`} width="small" margin="medium">
            <QuoteBlock quote={field.value.text} key={idx} />
          </Region>
        );
      }
      case 'featuredProduct': {
        const linkObject = {
          label: field.value.buttonText,
          href: field.value.product && field.value.product.sys.uri ? field.value.product.sys.uri : (!field.value.product || !field.value.product.sys.uri) && field.value.externalButtonLink ? field.value.externalButtonLink : "/shop",
        }
        return (
          <Region key={`region-${idx}`} width="medium" margin="medium">
            <FeaturedProduct title={field.value.title} text={field.value.summary} link={linkObject} product={field.value.product} key={idx} />
          </Region>
        );
      }
      case 'video': {
        return (
          <Region key={`region-${idx}`} width="medium" margin="large">
            <VideoPlayer title={field.value.entryTitle} hasControls={true} type={field.value.source} externalURL={field.value?.externalURL} internalVideo={field.value?.internalVideo && field.value?.internalVideo?.asset?.sys?.uri} key={idx} />
          </Region>
        );
      }    
    }
  });
};

export default Composer;
