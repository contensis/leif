import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProductHeroContent from './ProductHeroContent.container';
import { Props } from './ProductHeroContent';
import { _UUID } from '../../utils/UUID';

export default {
  title: 'Product/Components/ProductHeroContent',
  component: ProductHeroContent,
} as Meta;

const Template: Story<Props> = args => {
  return <ProductHeroContent {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  id: _UUID(),
  imageUri: 'https://source.unsplash.com/X_IvVDuHvDQ',
  variants: [
    {
      variantTitle: 'Product - 12 x 32',
      sku: 'SKU/101',
      price: 34,
      diameter: 12,
      height: 32,
      matchingPots: {
        title: 'Product - 12 x 32',
        type: 'Pot',
        imageUri: 'https://source.unsplash.com/X_IvVDuHvDQ',
        imageAlt: 'Unsplash',
        price: [32],
      },
    },
  ],
  title: 'Product title can span multiple lines',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus suspendisse orci scelerisque risus vel at quam tristique quis. Enim risus, sit tellus diam.',
};
