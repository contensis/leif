import { mapJson } from '@zengenti/contensis-react-base/util';

const CardMapping = {
  title: 'entryTitle',
  image: {
    src: 'primaryImage.asset.sys.uri',
    alt: 'primaryImage.altText',
  },
  path: 'sys.uri',
};

export const CardRowCanvasMapping = {
  title: 'block.value.title',
  cards: {
    $path: 'block.value.contentItems',
    $formatting: (card: any) => mapJson(card, CardMapping),
  },
  btn: {
    path: [
      'block.value.linkToInternalContent.sys.uri',
      'block.value.linkToExternalURL',
    ],
    label: 'block.value.buttonText',
  },
};

export const CardRowMapping = {
  title: 'title',
  cards: {
    $path: 'contentItems',
    $formatting: (card: any) => mapJson(card, CardMapping),
  },
  btn: {
    path: ['linkToInternalContent.sys.uri', 'linkToExternalURL'],
    label: 'buttonText',
  },
};
