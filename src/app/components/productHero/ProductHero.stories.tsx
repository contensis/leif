import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProductHero, { Props } from './ProductHero';

export default {
  title: 'Product/Components/ProductHero',
  component: ProductHero,
} as Meta;

const Template: Story<Props> = args => {
  return (
    <ProductHero {...args} />
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
  'hDyO6rr3kqk'
]

const MakeSlide = (i:number) => {
  return {
    asset: {
      altText: 'Plant',
      sys: {
        uri: `https://source.unsplash.com/${ImageDictionary[i]}`
      }
    }
  }
}

for (let i = 0; SlidesArray.length < 8; i++) {
  SlidesArray.push(MakeSlide(i));
}

export const Primary = Template.bind({});
Primary.args = {
  rating: '4',
  title: "Product title can span multiple lines",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus suspendisse orci scelerisque risus vel at quam tristique quis. Enim risus, sit tellus diam.",
  price: 34,
  slides: SlidesArray,
  options: [
    {
      title: 'Option one',
    },
    {
      title: 'Option two',
    },
    {
      title: 'Option three',
    }
  ]
}
