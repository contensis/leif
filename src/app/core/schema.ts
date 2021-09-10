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
  entryDescription: 'entryDescription',
  description: 'description',
  productTitle: 'productName',
  productType: 'type',
  leadParagraph: 'leadParagraph',
  summary: 'summary',
  image: 'image',
  primaryImage: 'primaryImage',
  sys,
  contentTypeId: 'sys.contentTypeId',
  wildcard: '*',
  body: 'body',
  kicker: 'kicker',
  potVariant: 'potVariant',
  plantVariant: 'plantVariant',
  headline: 'headline',
  quote: 'text',
  rating: 'rating',
  person: 'person',
  name: 'name',
  photo: 'photo',
  Tags: 'tags',
  blogComposer: 'postBody',
};

export const BaseFields = [
  Fields.entryTitle,
  Fields.sys.contentTypeId,
  Fields.sys.slug,
  Fields.sys.uri,
  Fields.sys.published,
];

export const ContentFields = [Fields.leadParagraph];

export const ReviewFields = [
  Fields.quote,
  Fields.rating,
  Fields.person,
  Fields.photo,
  Fields.name,
];

export const ProductFields = [
  Fields.primaryImage,
  Fields.Tags,
  Fields.productTitle,
  Fields.description,
  Fields.productType,
  Fields.plantVariant,
  Fields.potVariant,
];

export const BlogFields = [
  Fields.summary,
  Fields.kicker,
  Fields.primaryImage,
  Fields.sys.published,
  Fields.blogComposer,
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
  landingPage: 'landingPage',
  product: 'product',
  blogListing: 'blogListing',
  productListing: 'productListing',
  category: 'category',
  person: 'person',
  plant: 'plant',
  pot: 'pot',
  plantType: 'plantType',
  review: 'review',
};

export const SearchContentTypes = [
  ContentTypes.blog,
  ContentTypes.contentPage,
  ContentTypes.landingPage,
  ContentTypes.plant,
  ContentTypes.pot,
];

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
  [ContentTypes.productListing]: Listings.product,
};

export const SearchFacets = {
  all: 'all',
  blog: 'blog',
  product: 'product',
};

export const SearchFilters = {
  // Insert filters here
};

export const FreeTextWeights = {
  title: 100,
  description: 50,
  content: 10,
};

export const RoutingFields = [
  Fields.sys.contentTypeId,
  Fields.sys.slug,
  Fields.sys.uri,
  Fields.entryTitle,
];

export const ComposerComponents = {
  accordionList: 'accordionList',
  blockQuote: 'blockQuote',
  bodyCopy: 'bodyCopy',
  callout: 'callout',
  contentBlockRow: 'contentBlockRow',
  curatedProductSlider: 'curatedProductSlider',
  featuredBlogPosts: 'featuredBlogPosts',
  featuredProduct: 'featuredProduct',
  featuredReviews: 'featuredReviews',
  filteredProductSlider: 'filteredProductSlider',
  iconList: 'iconList',
  image: 'image',
  markup: 'markup',
  productSlider: 'productSlider',
  promotedProduct: 'promotedProduct',
  textBlock: 'textBlock',
  twitterEmbed: 'twitterEmbed',
  video: 'video',
};

export const BlogFilters = {
  category: 'category',
  author: 'author',
};

export const ProductFilters = {
  plantType: 'plantType',
  contentTypeId: 'contentTypeId',
  plantSize: 'plantSize',
  potSize: 'potSize',
  colour: 'colour',
};
