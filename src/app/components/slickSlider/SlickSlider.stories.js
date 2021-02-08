import React from 'react';

import SlickSlider from './SlickSlider';

export default {
  title: 'Product/Components/SlickSlider',
  component: SlickSlider,
}

const SlidesArray = [];
const Slide = {
  assets: {
    altText: 'Plant',
    sys: {
      uri: 'https://source.unsplash.com/a7Woj8W6J0s'
    }
  }
}
for (let i = 0; SlidesArray.length < 8; i++) {
  SlidesArray.push(Slide);
}

const Template = () => {
  return <SlickSlider slides={SlidesArray} />;
};

export const Primary = Template.bind({});
