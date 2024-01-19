import React from 'react';
import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';

import { productCardMapping } from '~/components/search/transformations/entry-to-card-props.mapper';
import mapJson from '~/core/util/json-mapper';

import FeaturedProduct, {
  Props as FeaturedProductProps,
} from '~/components/featuredProduct/FeaturedProduct';

const featuredProductMapping = {
  product: {
    $path: 'product',
    $formatting: (product: any) => mapJson(product, productCardMapping),
  },
  cardType: 'product.sys.contentTypeId',
  title: 'title',
  text: 'summary',
  linkLabel: 'buttonLabel',
  linkUri: {
    $path: 'product.sys.uri',
    $default: () => '/products',
  },
};

const FeaturedProductComponent = (
  props: RenderBlockProps<ComponentBlock<FeaturedProductProps>>
) => {
  if (!props.block.value) return null;

  const featuredProductProps = mapJson(
    props.block.value,
    featuredProductMapping
  ) as FeaturedProductProps;

  return <FeaturedProduct {...featuredProductProps} />;
};
export default FeaturedProductComponent;
