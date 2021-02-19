import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import GenericHero, { Props } from './GenericHero';

export default {
  title: 'Global/Components/GenericHero',
  component: GenericHero,
} as Meta;

const Template: Story<Props> = args => <GenericHero {...args} />;
export const Primary = Template.bind({});
Primary.args = { 
  title: 'Blog title can span multiple lines of text',
  link: {
    label: 'Blogs',
    href: '#',
  },
  image: {
    asset: {
      sys: {
        uri: 'https://source.unsplash.com/XqFEu8J-s0M',
      }
    }
  }
};
