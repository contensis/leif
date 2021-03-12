import mapJson from '../../../core/util/json-mapper';

import { imagePropsMapping } from '../../../components/image/transformations/image.component-to-props.mapper';
import { productCardMapping } from '../../../components/search/transformations/entry-to-card-props.mapper';
import { ComposerComponents } from '../../../core/schema';

// TODO: Each component to have their own mapping?

export const composerPropsMapping = {
  [ComposerComponents.markup]: {
    text: '.',
  },
  [ComposerComponents.image]: {
    image: (props: any) => {
      return mapJson(props, imagePropsMapping);
    },
    title: ['asset.altText', 'altText'],
    text: 'caption',
  },
  [ComposerComponents.blockQuote]: {
    quote: 'text',
  },
  [ComposerComponents.featuredProduct]: {
    product: {
      ...productCardMapping,
    },
    cardType: 'product.sys.contentTypeId',
    linkUri: 'externalButtonLink',
    linkLabel: 'buttonText',
    title: 'title',
    text: 'summary',
    link: ['product.sys.uri', 'externalButtonLink', '/shop'],
  },
  [ComposerComponents.video]: {
    title: 'entryTitle',
    type: 'source',
    externalURL: 'externalURL',
    internalVideo: 'internalVideo.asset.sys.uri',
  },
};
