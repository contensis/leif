import React from 'react';
import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';

import { FeaturedProductMapping } from '~/components/featuredProduct/FeaturedProduct.mapper';
import mapJson from '~/core/util/json-mapper';

import FeaturedProduct, {
  Props as FeaturedProductProps,
} from '~/components/featuredProduct/FeaturedProduct';

const FeaturedProductCanvas = (
  props: RenderBlockProps<ComponentBlock<FeaturedProductProps>>
) => {
  console.info({ props });

  return (
    <FeaturedProduct
      {...(mapJson(
        props.block.value,
        FeaturedProductMapping
      ) as FeaturedProductProps)}
    />
  );
};

export default FeaturedProductCanvas;
