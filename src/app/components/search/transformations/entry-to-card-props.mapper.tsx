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
  title: 'product.productName',
  price: 'product.productInformation.price',
  imageUri: {
    $path: 'product.thumbnailImage',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
  },
  imageAlt: [
    'product.thumbnailImage.altText',
    'product.thumbnailImage.caption',
    'product.thumbnailImage.asset.title',
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
