import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProductSlider, { Props } from './ProductSlider';

export default {
  title: 'Landing/Components/ProductSlider',
  component: ProductSlider,
} as Meta;

const Template: Story<Props> = args => {
  return (
    <div
      style={{
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <ProductSlider {...args} />
    </div>
  );
};

const SlidesArray = [];

const ImageDictionary = [
  'W1yjvf5idqA',
  'a7Woj8W6J0s',
  'X_IvVDuHvDQ',
  '8ioenvmof-I',
  'm2J105CzEAU',
  'UcfKYTan-LU',
  'GQD3Av_9A88',
  '5sF6NrB1MEg',
  'hDyO6rr3kqk',
];

const MakeSlide = (i: number) => {
  return {
    title: 'Product listing can span multiple lines',
    price: 35,
    rating: '4',
    type: 'product',
    imageUri: `https://source.unsplash.com/${ImageDictionary[i]}`,
    imageAlt: 'Unsplash image',
  };
};

for (let i = 0; SlidesArray.length < 8; i++) {
  SlidesArray.push(MakeSlide(i));
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Bringing life to your home',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lacus, elit a diam eget enim venenatis. Nibh quis facilisis et hendrerit eu nisl.',
  ctaLink: '/',
  ctaText: 'Shop now',
  bgImageUri: 'https://source.unsplash.com/7d7OR-RvufU',
  products: SlidesArray,
};
