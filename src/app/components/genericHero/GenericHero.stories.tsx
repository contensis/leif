import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import GenericHero, { Props } from './GenericHero';
import dateWithSuffix from '../../utils/dateWithSuffix';

export default {
  title: 'Global/Components/GenericHero',
  component: GenericHero,
} as Meta;

const Template: Story<Props> = args => <GenericHero {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  title: 'Blog title can span multiple lines of text',
  backLink: {
    label: 'Back',
  },
  linkLabel: 'Read more',
  imageUri: 'https://source.unsplash.com/XqFEu8J-s0M',
  imageAlt: 'Unsplash Image',
  readTime: 4,
  date: dateWithSuffix(new Date().toISOString()),
};
