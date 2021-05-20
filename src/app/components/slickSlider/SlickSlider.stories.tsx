import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SlickSlider, { Props } from './SlickSlider';

export default {
  title: 'Global/Components/SlickSlider',
  component: SlickSlider,
} as Meta;

const Template: Story<Props> = args => {
  return <SlickSlider {...args} />;
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
    path: `https://source.unsplash.com/${ImageDictionary[i]}`,
    alt: 'Plant',
  };
};

for (let i = 0; SlidesArray.length < 8; i++) {
  SlidesArray.push(MakeSlide(i));
}

export const Primary = Template.bind({});
Primary.args = {
  slides: SlidesArray,
};
