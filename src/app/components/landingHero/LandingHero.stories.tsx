import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LandingHero, { Props } from './LandingHero';

export default {
  title: 'Landing/Components/LandingHero',
  component: LandingHero,
} as Meta;

const Template: Story<Props> = args => {
  return <LandingHero {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Beautiful plants for every home',
  summary:
    'Discover our hand-picked collection of houseplants, from easy-care favourites to rare botanical treasures. Free UK delivery on orders over £40.',
  ctaLink: '/shop',
  ctaText: 'Shop plants',
  imageUri: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=900',
  imageAlt: 'Lush green houseplants in a bright living room',
};
