import { mapEntries, mapComposer } from '~/core/util/json-mapper';
import { ContentTypes, CardTypes } from '~/core/schema';

import { composerPropsMapping } from '~/components/composer/transformations/composer-to-props.mapper';

import dateWithSuffix from '~/utils/dateWithSuffix';
import { _calReadTime } from '~/utils/calculateReadTime';
import { _truncateString } from '~/utils/truncateString';

import { Props as CardProps } from '~/components/card/Card';
import { Props as SearchCardProps } from '~/components/searchCard/SearchCard';

const baseMapping = {
  title: 'entryTitle',
  text: {
    $path: ['kicker', 'leadParagraph', 'summary', 'description'],
    $formatting: (text: string) => _truncateString(text, 124),
  },
  uri: 'sys.uri',
  imageUri: {
    $path: 'heroImage.asset.sys.uri',
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: ['heroImage.altText', 'heroImage.caption', 'heroImage.asset.title'],
};

export const reviewBlockMapping = {
  ...baseMapping,
  quote: 'text',
  photo: {
    $path: 'person.photo.asset.sys.uri',
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
    $path: 'primaryImage.asset.sys.uri',
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  date: {
    $path: 'sys.version.published',
    $formatting: (date: string) => dateWithSuffix(date),
  },
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
    $formatting: (v: any) => v.price,
  },
  productType: 'type.entryTitle',
  imageUri: {
    $path: 'primaryImage.asset.sys.uri',
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  imageAlt: [
    'primaryImage.altText',
    'primaryImage.caption',
    'primaryImage.asset.title',
  ],
  ctaLink: 'sys.uri',
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

const mapEntriesToResults = (entries: any): (SearchCardProps | CardProps)[] =>
  mapEntries(entries, mappers);

export default mapEntriesToResults;
