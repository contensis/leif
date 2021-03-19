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
  leadParagraph: 'leadParagraph',
  summary: 'summary',
  image: 'image',
  primaryImage: 'primaryImage',
  sys,
  contentTypeId: 'sys.contentTypeId',
  wildcard: '*',
  body: 'body',
  kicker: 'kicker',
  readTime: 'readTime',
};

export const BaseFields = [
  Fields.entryTitle,
  Fields.sys.contentTypeId,
  Fields.sys.slug,
  Fields.sys.uri,
  Fields.sys.published,
];

export const ContentFields = [Fields.leadParagraph];

export const BlogFields = [
  Fields.summary,
  Fields.kicker,
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
  blog: 'blog',
  product: 'product',
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
  iconList: 'iconList',
  callout: 'callout',
  textBlock: 'textBlock',
  image: 'image',
  blockQuote: 'blockQuote',
  featuredProduct: 'featuredProduct',
  video: 'video',
  accordionList: 'accordionList',
  twitterEmbed: 'twitterEmbed',
  contentBlockRow: 'contentBlockRow',
};

export const BlogFilters = {
  category: 'category',
  author: 'author',
};
