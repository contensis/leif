import { mapJson } from '@zengenti/contensis-react-base/util';

const CardMapping = {
  title: 'entryTitle',
  image: {
    src: 'primaryImage.asset.sys.uri',
    alt: 'primaryImage.altText',
  },
  path: 'sys.uri',
};

export const CardRowSpotlightMapping = {
  cards: {
    $path: 'relatedContent',
    $formatting: (card: any) => mapJson(card, CardMapping),
  },
};
