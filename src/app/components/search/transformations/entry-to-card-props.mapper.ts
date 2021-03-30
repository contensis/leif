import { ContentTypes, CardTypes } from '../../../core/schema';

import dateWithSuffix from '../../../utils/dateWithSuffix';

import { mapEntries } from '../../../core/util/json-mapper';
import { selectCurrentPath } from '../../../core/redux/selectors';
// import { VariantProps } from '~/components/productHero/ProductHero';

const baseMapping = {
  title: 'entryTitle',
  text: ['kicker', 'leadParagraph', 'summary', 'description'],
  uri: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
  },
};

export const reviewBlockMapping = {
  ...baseMapping,
  quote: 'text',
  photo: {
    $path: 'person',
    $formatting: (person: any) => console.info({ person }),
    $default: () => '/image-library/default-images/leif-fallback.png',
    // person &&
    // person.photo &&
    // person.photo.asset &&
    // person.photo.asset.sys &&
    // person.photo.asset.sys.uri,
  },
  name: 'person.entryTitle',
  rating: {
    $path: 'rating',
    $formatting: (rating: any) => rating && rating.replace(' stars', ''),
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
  price: {
    $path: ['plantVariant', 'potVariant'],
    $formatting: (v: any) => {
      return v.price;
    },
  },
  productType: 'type.entryTitle',
  imageUri: {
    $path: 'primaryImage',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: [
    'primaryImage.altText',
    'primaryImage.caption',
    'primaryImage.asset.title',
  ],
  ctaLink: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
  },
  ctaText: () => 'Find out more',
  isRenderedAsLink: () => true,
};

export const mappers = {
  [ContentTypes.contentPage]: baseMapping,
  [ContentTypes.plant]: productCardMapping,
  [ContentTypes.pot]: productCardMapping,
  [ContentTypes.blog]: blogCardMapping,
  [ContentTypes.review]: reviewBlockMapping,
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
