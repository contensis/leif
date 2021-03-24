import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProductHero from './ProductHero.container';
import { Props } from './ProductHero';
import { _UUID } from '../../utils/UUID';

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
    imageUri: `https://source.unsplash.com/${ImageDictionary[i]}`,
    imageAlt: 'Plant',
  };
}

for (let i = 0; SlidesArray.length < 8; i++) {
  SlidesArray.push(MakeSlide(i));
}

export const Primary = Template.bind({});
Primary.args = {
  id: _UUID(),
  rating: '4',
  title: 'Product title can span multiple lines',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus suspendisse orci scelerisque risus vel at quam tristique quis. Enim risus, sit tellus diam.',
  price: 34,
  slides: SlidesArray,
  options: [
    {
      title: 'Option one',
      key: 'opt-1',
    },
    {
      title: 'Option two',
      key: 'opt-2',
    },
    {
      title: 'Option three',
      key: 'opt-3',
    },
  ],
};
