import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Card, { Props } from './Card';

export default {
  title: 'Global/Components/Card',
  component: Card,
} as Meta;
const Template: Story<Props> = args => <Card {...args} />;

const dataObject = {
  title: 'Title can span multiple lines of text',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
  image: {
    asset: {
      sys: {
        uri: 'https://source.unsplash.com/TRAF_LhFCUs',
      },
    },
  },
  date: new Date().toISOString(),
  readTime: '4',
};

export const BlogCard = Template.bind({});
BlogCard.args = {
  type: 'blogPost',
  title: dataObject.title,
  text: dataObject.text,
  image: dataObject.image,
  date: dataObject.date,
  readTime: dataObject.readTime,
};

export const ProductCard = Template.bind({});
ProductCard.args = {
  type: 'plant',
  title: dataObject.title,
  image: dataObject.image,
  price: 32,
  rating: '4',
};


export const ContentCard = Template.bind({});
ContentCard.args = {
  type: 'content',
  title: dataObject.title,
  text: dataObject.text,
  image: dataObject.image,
};
