import { ContentTypes, CardTypes } from '~/core/schema';

import { selectCurrentPath } from '~/core/redux/selectors';

import { mapEntries, mapComposer } from '~/core/util/json-mapper';
import dateWithSuffix from '~/utils/dateWithSuffix';
import { _calReadTime } from '~/utils/calculateReadTime';

import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';

const baseMapping = {
  title: 'entryTitle',
  text: ['kicker', 'leadParagraph', 'summary', 'description'],
  uri: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
  },
  imageUri: {
    $path: 'heroImage',
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: ['heroImage.altText', 'heroImage.caption', 'heroImage.asset.title'],
};

export const reviewBlockMapping = {
  ...baseMapping,
  quote: 'text',
  photo: {
    $path: 'person',
    $formatting: (person: any) =>
      person &&
      person.photo &&
      person.photo.asset &&
      person.photo.asset.sys &&
      person.photo.asset.sys.uri,
    $default: () => '/image-library/default-images/leif-fallback.png',
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
  readTime: ({ postBody }: any) => {
    const composer = mapComposer(postBody, composerPropsMapping);
    return _calReadTime(composer);
  },
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
  isPromoted: {
    $path: 'tags',
    $formatting: (tag: string) => (tag === 'promoted' ? true : false),
  },
};

export const mappers = {
  [ContentTypes.contentPage]: baseMapping,
  [ContentTypes.landingPage]: baseMapping,
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
