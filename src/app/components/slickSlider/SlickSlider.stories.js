import React from 'react';

import SlickSlider from './SlickSlider';

export default {
  title: 'Product/Components/SlickSlider',
  component: SlickSlider,
}

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

const MakeSlide = (i) => {
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

const Template = () => {
  return (
    <SlickSlider
      slides={SlidesArray}
    />
  );
};

export const Primary = Template.bind({});
