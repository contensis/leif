import { mapEntries, mapComposer } from '~/core/util/json-mapper';
import { ContentTypes, CardTypes } from '~/core/schema';

import { composerPropsMapping } from '~/components/composer/Composer.mapper';

import dateWithSuffix from '~/utils/dateWithSuffix';
import { doCalculateReadtime } from '~/utils/calculateReadTime';
import { doTruncateString } from '~/utils/truncateString';

import { Props as SearchCardProps } from '~/components/searchCard/SearchCard';

const BaseMapping = {
  title: 'entryTitle',
  path: 'sys.uri',
};

export const BlogCardMapping = {
  ...BaseMapping,
  type: () => CardTypes.Blog,
  title: 'entryTitle',
  text: {
    $path: 'summary',
    $formatting: (text: string) => doTruncateString(text, 124),
  },
  image: {
    src: {
      $path: 'primaryImage.asset.sys.uri',
      $default: () => '/image-library/default-images/leif-fallback.png',
    },
    alt: 'primaryImage.altText',
  },
  date: {
    $path: 'sys.version.published',
    $formatting: (date: string) => dateWithSuffix(date),
  },
  readtime: ({ postBody }: any) => {
    const composer = mapComposer(postBody, composerPropsMapping);
    return doCalculateReadtime(composer);
  },
};

export const ReviewBlockMapping = {
  ...BaseMapping,
  quote: 'text',
  photo: {
    $path: 'person.photo.asset.sys.uri',
    $default: () => '/image-library/default-images/leif-fallback.png',
  },
  name: 'person.entryTitle',
  rating: {
    $path: 'rating',
    $formatting: (rating: any) => rating?.replace(' stars', ''),
  },
};

export const ProductCardMapping = {
  ...BaseMapping,
  type: () => CardTypes.Product,
  title: 'productName',
  text: 'description',
  price: {
    $path: '.',
    $formatting: ({ plantVariant, potVariant }: any) => {
      const prices = [] as number[];

      plantVariant?.map((v: any) => prices.push(v.price));
      potVariant?.map((v: any) => prices.push(v.price));
      if (!prices || prices.length <= 0) return `£`;
      if (prices.length > 1) return `£${Math.min(...prices)}+`;
      return `£${prices[0]}`;
    },
  },
  image: {
    src: {
      $path: 'primaryImage.asset.sys.uri',
      $default: () => '/image-library/default-images/leif-fallback.png',
    },
    alt: 'primaryImage.altText',
  },
  isPromoted: {
    $path: 'tags',
    $formatting: (tag: string) => tag === 'promoted' || false,
  },
};

export const ContentMapping = {
  ...BaseMapping,
  type: () => CardTypes.Product,
  title: 'entryTitle',
  text: {
    $path: 'leadParagraph',
    $formatting: (text: string) => doTruncateString(text, 124),
  },
  image: {
    src: 'heroImage.asset.sys.uri',
    alt: 'heroImage.altText',
  },
};

export const mappers = {
  [ContentTypes.blog]: BlogCardMapping,
  [ContentTypes.plant]: ProductCardMapping,
  [ContentTypes.pot]: ProductCardMapping,
  [ContentTypes.contentPage]: ContentMapping,
  [ContentTypes.landingPage]: ContentMapping,
  [ContentTypes.review]: ReviewBlockMapping,
};

const mapEntriesToResults = (entries: any): SearchCardProps[] =>
  mapEntries(entries, mappers);

export default mapEntriesToResults;
