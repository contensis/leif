import React from 'react';
import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';

import { featuredProductMapping } from '~/components/featuredProduct/transformations/featuredproduct.component-to-props.mapper';
import mapJson from '~/core/util/json-mapper';

import FeaturedProduct, {
  Props as FeaturedProductProps,
} from '~/components/featuredProduct/FeaturedProduct';

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
