import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import TestimonialSlider, { Props } from './TestimonialSlider';

export default {
  title: 'Landing/Components/TestimonialSlider',
  component: TestimonialSlider,
} as Meta;

const Template: Story<Props> = args => {
  return <TestimonialSlider {...args} />;
};

const testimonials = [];
const testimonial = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna ut amet, ac id facilisis quisque quam viverra tincidunt. Placerat morbi nulla diam porttitor augue vel sit mattis vulputate. Viverra dictum morbi rutrum in sed cras in sit illet ez forza arenas illes.',
  name: 'John Smith',
  photo: 'https://source.unsplash.com/c_GmwfHBDzk',
};

for (let i = 0; testimonials.length < 3; i++) {
  testimonials.push(testimonial);
}

export const Primary = Template.bind({});
Primary.args = {
  testimonials,
  bgImage: 'https://source.unsplash.com/c4Ccpa8sMlI',
};
