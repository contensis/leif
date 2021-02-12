import React from 'react';

import RelatedContent from './RelatedContent';

export default {
  title: 'Global/Components/RelatedContent',
  component: RelatedContent,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['blogPost'],
      },
    },
  },
};

const Template = ({type = 'blogPost', ...args}) => {
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
      contentTypeId: type,
      version: {
        published: new Date().toISOString(),
      },
    },
    readTime: 7,
  };

  const results = [];
  for (let i = 0; results.length < 3; i++) {
    results.push(result);
  }
  return <RelatedContent results={results} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'blogPost',
  title: 'Related blogs',
  link: {
    label: 'View all blogs',
    uri: '#',
    type: 'secondary',
  }
}
