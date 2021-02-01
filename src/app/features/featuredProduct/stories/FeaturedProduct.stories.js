import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import FeaturedProduct from '../components/FeaturedProduct';

storiesOf('Features | Global', module).add(
  'Featured Product',
  () => {
    const link = {
      label: 'Find out more',
      href: '#',
    };
    const product = {
      image: {
        asset: {
          altText: 'Plant',
          sys: {
            uri: 'https://source.unsplash.com/UcfKYTan-LU',
          },
        },
      },
      title: 'Product listing can span multiple lines',
      tag: 'Plant',
      price: 35,
      rating: 4,
    };
    return (
      <FeaturedProduct
        title={text('Product title', 'Featured product banner title')}
        text={text(
          'Product text',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis adipiscing urna, tellus. Elit fringilla mattis tempus sodales magna enim eleifend. Blandit arcu sed dignissim elementum.'
        )}
        link={link}
        product={product}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
