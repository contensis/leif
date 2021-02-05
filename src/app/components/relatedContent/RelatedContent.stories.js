import React from 'react';

import RelatedContent from './RelatedContent';

export default {
  title: 'Global/Components/RelatedContent',
  component: RelatedContent,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'blog',
        ]
      },
    },
  },
}

const Template = ({type = 'blog', ...args}) => {
  const result = {
    title: 'Blog title can span multiple lines of text',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
    image: {
      asset: {
        sys: {
          uri: 'https://source.unsplash.com/6hgrfOJhr74'
        }
      }
    },
    sys: {
      contentTypeId: type,
    },
    date: new Date().toISOString(),
    readTime: 7,
  }

  const results = [];
  for (let i = 0; results.length < 3; i++) {
    results.push(result);
  }
  return <RelatedContent results={results} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Blog title can span multiple lines of text',
  text: 'Image accreditation and information can span multiple lines.',
  link: {
    label: 'View all blogs',
    href: '#',
    type: 'secondary',
  }
}
