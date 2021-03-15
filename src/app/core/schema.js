export const DataFormats = {
  entry: 'entry',
  webpage: 'webpage',
};
const sys = {
  contentTypeId: 'sys.contentTypeId',
  dataFormat: 'sys.dataFormat',
  filename: 'sys.properties.filename',
  id: 'sys.id',
  includeInSearch: 'sys.metadata.includeInSearch',
  slug: 'sys.slug',
  uri: 'sys.uri',
  versionStatus: 'sys.versionStatus',
  published: 'sys.version.published',
};

export const Fields = {
  entryTitle: 'entryTitle',
  image: 'image',
  primaryImage: 'primaryImage',
  sys,
  contentTypeId: 'sys.contentTypeId',
  wildcard: '*',
  body: 'body',
  summary: 'kicker',
  readTime: 'readTime',
};

export const BaseFields = [
  Fields.entryTitle,
  Fields.sys.contentTypeId,
  Fields.sys.slug,
  Fields.sys.uri,
  Fields.sys.published,
];

export const BlogFields = [
  Fields.summary,
  Fields.primaryImage,
  Fields.sys.published,
  Fields.readTime,
];

export const Projects = {
  website: 'website',
};

export const VersionStatus = {
  published: 'published',
  latest: 'latest',
};

export const ContentTypes = {
  blog: 'blogPost',
  contentPage: 'contentPage',
  product: 'product',
  blogListing: 'blogListing',
  category: 'category',
  person: 'person',
  plant: 'plant',
  pot: 'pot',
};

export const FilterExpressionTypes = {
  contentType: 'contentType',
  field: 'field',
};

export const CardTypes = {
  Blog: 'blog',
  Product: 'product',
  Explore: 'explore',
  Content: 'content',
};

export const Listings = {
  blog: 'blogListing',
  product: 'productsListing',
};

export const ListingPages = {
  [ContentTypes.blogListing]: Listings.blog,
};

export const SearchFacets = {
  all: 'all',
};

export const SearchFilters = {
  //Insert filters here
};

export const FreeTextWeights = {
  title: 100,
  description: 50,
  keywords: 50,
  content: 10,
};

export const RoutingFields = [
  Fields.sys.contentTypeId,
  Fields.sys.slug,
  Fields.sys.uri,
  Fields.entryTitle,
];

export const ComposerComponents = {
  markup: 'markup',
  image: 'image',
  blockQuote: 'blockQuote',
  featuredProduct: 'featuredProduct',
  video: 'video',
};

export const BlogFilters = {
  category: 'category',
  author: 'author',
  date: 'date',
};
