import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import TestimonialSlider from './TestimonialSlider';

export default {
  title: 'Landing/Components/TestimonialSlider',
  component: TestimonialSlider,
} as Meta;

const Template = args => {
  return <TestimonialSlider {...args} />;
};

const testimonials = [];
const testimonial = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna ut amet, ac id facilisis quisque quam viverra tincidunt. Placerat morbi nulla diam porttitor augue vel sit mattis vulputate. Viverra dictum morbi rutrum in sed cras in sit illet ez forza arenas illes.',
  person: {
    name: 'John Smith',
    photo: {
      asset: {
        sys: {
          uri: 'https://source.unsplash.com/c_GmwfHBDzk',
        },
      },
    },
  },
};

for (let i = 0; testimonials.length < 3; i++) {
  testimonials.push(testimonial);
}

export const Primary = Template.bind({
  testimonials: testimonials,
  bgImage: 'https://source.unsplash.com/c4Ccpa8sMlI',
});
