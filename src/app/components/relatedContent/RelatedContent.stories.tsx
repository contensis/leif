import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RelatedContent, { Props } from './RelatedContent';

export default {
  title: 'Global/Components/RelatedContent',
  component: RelatedContent,
} as Meta;

const Template: Story<Props> = args => {
  return <RelatedContent {...args} />;
};

const result = {
  entryTitle: 'Blog title can span multiple lines of text',
  entryDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
  thumbnailImage: {
    asset: {
      sys: {
        uri: 'https://source.unsplash.com/m2J105CzEAU',
      },
    },
  },
  sys: {
    contentTypeId: 'blogPost',
    version: {
      published: new Date().toISOString(),
    },
  },
  readTime: 7,
};
const resultsArray = [];
for (let i = 0; resultsArray.length < 3; i++) {
  resultsArray.push(result);
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Related blogs',
  link: {
    label: 'View all blogs',
    uri: '#',
    type: 'secondary',
  },
  results: resultsArray,
};
