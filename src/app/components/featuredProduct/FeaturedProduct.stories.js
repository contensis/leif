import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import FeaturedProduct from './FeaturedProduct';

export default {
  title: 'Global/Components/FeaturedProduct',
  component: FeaturedProduct,
  argTypes: {
    rating: {
      control: {
        type: 'select',
        options: [
          '1', 
          '2', 
          '3',
          '4',
          '5',
        ],
      },
    },
    price: {
      type: 'text',
    },
  },
}

const Template = ({ rating = 3, price = 2, ...args }) => {
  const product = {
    title: 'Product listing can span multiple lines',
    image: {
      asset: {
        altText: 'Plant',
        sys: {
          uri: 'https://source.unsplash.com/UcfKYTan-LU'
        }
      }
    },
    price: price,
    rating: rating
  }
  return <FeaturedProduct {...args} product={product} />;
};

export const Primary = Template.bind({});
Primary.args = { 
  title: 'Featured product banner title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis adipiscing urna, tellus. Elit fringilla mattis tempus sodales magna enim eleifend. Blandit arcu sed dignissim elementum.',
  link: {
    label: 'Find out more',
    href: '#',
  },
};
