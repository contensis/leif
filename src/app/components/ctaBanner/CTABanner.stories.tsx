import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CTABanner, { Props } from './CTABanner';

export default {
  title: 'Global/Components/CTABanner',
  component: CTABanner,
} as Meta;

const Template: Story<Props> = args => {
  return <CTABanner {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'CTA title can span multiple lines',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
  image: {
    asset: {
      sys: {
        uri: 'https://source.unsplash.com/9Z1KRIfpBTM',
      },
    },
  },
  cta: {
    type: 'primary',
    label: 'Find out more',
    uri: '#',
  },
};
