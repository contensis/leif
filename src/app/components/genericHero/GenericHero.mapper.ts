import dateWithSuffix from '~/utils/dateWithSuffix';
import { composerPropsMapping } from '../composer/Composer.mapper';
import { mapComposer } from '@zengenti/contensis-react-base/util';
import { doCalculateReadtime } from '~/utils/calculateReadTime';

export const BlogHeroMapping = {
  title: 'entryTitle',
  image: {
    src: 'primaryImage.asset.sys.uri',
    alt: 'primaryImage.altText',
  },
  backButton: {
    path: () => '/blog',
    label: () => 'Blogs',
  },
};

export const BlogListingHeroMapping = {
  title: 'featuredBlog.entryTitle',
  text: 'featuredBlog.kicker',
  image: {
    src: 'featuredBlog.primaryImage.asset.sys.uri',
    alt: 'featuredBlog.primaryImage.altText',
  },
  path: 'featuredBlog.sys.uri',
  date: {
    $path: 'sys.version.published',
    $formatting: (pubData: string) => dateWithSuffix(pubData),
  },
  readtime: {
    $path: 'featuredBlog',
    $formatting: ({ postBody }: any) => {
      const composer = mapComposer(postBody, composerPropsMapping);
      return doCalculateReadtime(composer);
    },
  },
  cta: {
    label: () => 'Read more',
    a11y: {
      $path: 'title',
      $formatting: (title: string) => `Read more about ${title}`,
    },
  },
};

export const ProductListingHeroMapping = {
  title: 'title',
  text: 'text',
  image: 'image',
  path: 'path',
  price: 'price',
  cta: {
    label: () => 'Find out more',
    a11y: {
      $path: 'title',
      $formatting: (title: string) => `Find out more about ${title}`,
    },
  },
};
