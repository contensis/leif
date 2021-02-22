import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchCard, { Props } from './SearchCard';

export default {
  title: 'Search/Components/SearchCard',
  component: SearchCard,
} as Meta;
const Template: Story<Props> = args => <SearchCard {...args} />;

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
  price: 35,
};

export const Blog = Template.bind({});
Blog.args = {
  type: 'blogPost',
  title: dataObject.title,
  text: dataObject.text,
  image: dataObject.image,
  date: dataObject.date,
  readTime: dataObject.readTime,
};
export const Global = Template.bind({});
Global.args = {
  title: dataObject.title,
  text: dataObject.text,
};
export const Product = Template.bind({});
Product.args = {
  type: 'pot',
  title: dataObject.title,
  text: dataObject.text,
  image: dataObject.image,
  price: dataObject.price,
};
