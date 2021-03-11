import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import BlogInformation, { Props } from './BlogInformation';

export default {
  title: 'Blog/Components/BlogInformation',
  component: BlogInformation,
} as Meta;

const Template: Story<Props> = args => {
  return <BlogInformation {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  readTime: '7',
  date: new Date().toISOString(),
  name: 'John Smith',
  photo: 'https://source.unsplash.com/c_GmwfHBDzk'
};
