import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FeaturedProduct, { Props } from './FeaturedProduct';

export default {
  title: 'Global/Components/FeaturedProduct',
  component: FeaturedProduct,
} as Meta;

const Template: Story<Props> = args => {
  return <FeaturedProduct {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Featured product banner title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis adipiscing urna, tellus. Elit fringilla mattis tempus sodales magna enim eleifend. Blandit arcu sed dignissim elementum.',
  linkLabel: 'Find out more',
  linkUri: '#',
  product: {
    title: 'Product listing can span multiple lines',
    imageUri: 'https://source.unsplash.com/UcfKYTan-LU',
    imageAlt: 'Unsplash image',
    price: 63,
    rating: '4',
    type: 'product',
  },
};
