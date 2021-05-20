import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RelatedContent, { Props } from './RelatedContent';
import dateWithSuffix from '../../utils/dateWithSuffix';

export default {
  title: 'Global/Components/RelatedContent',
  component: RelatedContent,
} as Meta;

const Template: Story<Props> = args => {
  return <RelatedContent {...args} />;
};

const result = {
  type: 'blog',
  title: 'Blog title can span multiple lines of text',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
  imageUri: 'https://source.unsplash.com/m2J105CzEAU',
  imageAlt: 'Unsplash image',
  date: dateWithSuffix(new Date().toISOString()),
  readTime: 7,
};
const resultsArray = [];
for (let i = 0; resultsArray.length < 3; i++) {
  resultsArray.push(result);
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Related blogs',
  linkLabel: 'View all blogs',
  linkUri: '#',
  linkType: 'secondary',
  results: resultsArray,
};
