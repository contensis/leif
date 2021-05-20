import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import BlogInformation, { Props } from './BlogInformation';
import dateWithSuffix from '../../utils/dateWithSuffix';

export default {
  title: 'Blog/Components/BlogInformation',
  component: BlogInformation,
} as Meta;

const Template: Story<Props> = args => {
  return <BlogInformation {...args} />;
};

export const Primary = Template.bind({});
const date = new Date().toISOString();
Primary.args = {
  readTime: '7',
  date: dateWithSuffix(date),
  name: 'John Smith',
  photo: 'https://source.unsplash.com/c_GmwfHBDzk',
};
