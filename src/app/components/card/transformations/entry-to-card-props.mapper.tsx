import { ContentTypes, CardTypes } from '~/core/schema';

import { mapEntries } from '~/core/util/json-mapper';
import { selectCurrentPath } from '~/core/redux/selectors';

const baseMapping = {
  title: 'entryTitle',
  text: 'kicker',
};

export const blogCardMapping = {
  ...baseMapping,
  type: () => CardTypes.Blog,
  imageUri: {
    $path: ['primaryImage.asset.sys.uri'],
  },
  readTime: 'readTime',
  date: 'sys.version.published',
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
    $path: ['product.thumbnailImage.asset.sys.uri'],
  },
  imageAlt: [
    'product.thumbnailImage.altText',
    'product.thumbnailImage.caption',
    'product.thumbnailImage.asset.title',
  ],
};

export const mappers = {
  [ContentTypes.plant]: productCardMapping,
  [ContentTypes.pot]: productCardMapping,
  [ContentTypes.blog]: blogCardMapping,
};

const mapEntriesToResults = (entries: any, context?: string, state?: any) => {
  let sourceArray = entries;
  // debugger;
  if (context === 'listings') {
    const currentPath = selectCurrentPath(state);
    sourceArray = entries.map((e: any) => ({ ...e, currentPath }));
  }
  return mapEntries(sourceArray, mappers);
};

export default mapEntriesToResults;
