import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

export const featuredBlogPostPropsMapping = {
  title: 'title',
  results: ({ blogPosts }: any) => mapEntriesToResults(blogPosts),
  linkLabel: 'buttonText',
  linkUri: {
    $path: ['linkToInternalContent.sys.uri', 'linkToExternalURL'],
    $default: () => '/blog',
  },
};
