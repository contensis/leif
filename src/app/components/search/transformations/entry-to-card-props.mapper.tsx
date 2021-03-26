import { ContentTypes, CardTypes } from '../../../core/schema';

import dateWithSuffix from '../../../utils/dateWithSuffix';

import { mapEntries } from '../../../core/util/json-mapper';
import { selectCurrentPath } from '../../../core/redux/selectors';

const baseMapping = {
  title: 'entryTitle',
  text: ['kicker', 'leadParagraph', 'summary'],
  uri: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
  },
};

export const blogCardMapping = {
  ...baseMapping,
  type: () => CardTypes.Blog,
  imageUri: {
    $path: 'primaryImage',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  date: ({ sys }: any) =>
    dateWithSuffix(sys && sys.version && sys.version.published),
  imageAlt: [
    'primaryImage.altText',
    'primaryImage.caption',
    'primaryImage.asset.title',
  ],
};

export const productCardMapping = {
  ...baseMapping,
  type: () => CardTypes.Product,
  title: ['productName'],
  price: 'productInformation.price',
  productType: 'type.entryTitle',
  imageUri: {
    $path: ['thumbnailImage', 'externalCardImage'],
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: [
    'thumbnailImage.altText',
    'thumbnailImage.caption',
    'thumbnailImage.asset.title',
  ],
};

export const mappers = {
  [ContentTypes.contentPage]: baseMapping,
  [ContentTypes.plant]: productCardMapping,
  [ContentTypes.pot]: productCardMapping,
  [ContentTypes.blog]: blogCardMapping,
};

const mapEntriesToResults = (entries: any, context?: string, state?: any) => {
  let sourceArray = entries;
  if (context === 'listings') {
    const currentPath = selectCurrentPath(state);
    sourceArray = entries.map((e: any) => ({ ...e, currentPath }));
  }
  return mapEntries(sourceArray, mappers);
};

export default mapEntriesToResults;
