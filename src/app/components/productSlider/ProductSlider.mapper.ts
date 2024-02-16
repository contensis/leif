import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

const ProductSliderMappingBase = {
  title: 'title',
  summary: 'summary',
  ctaLink: () => '/products',
  ctaText: () => 'Shop now',
  bgImageUri: () => '/static/img/backgrounds/product-slider-background.png',
};

export const CuratedProductSliderPropsMapping = {
  ...ProductSliderMappingBase,
  products: ({ curatedProducts }: any) => mapEntriesToResults(curatedProducts),
};

export const FilteredProductSliderPropsMapping = {
  ...ProductSliderMappingBase,
  hasFilter: {
    $path: 'filter',
    $formatting: (filter: any) => (filter && filter.entryTitle ? true : false),
    $default: () => () => false,
  },
  filter: {
    $path: 'filter',
    $formatting: (filter: any) => filter && filter.entryTitle,
  },
};
