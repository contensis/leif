import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchCard, { Props } from './SearchCard';
import dateWithSuffix from '../../utils/dateWithSuffix';

export default {
  title: 'Search/Components/SearchCard',
  component: SearchCard,
} as Meta;
const Template: Story<Props> = args => <SearchCard {...args} />;

const dataObject = {
  title: 'Title can span multiple lines of text',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
  imageUri: 'https://source.unsplash.com/TRAF_LhFCUs',
  imageAlt: 'Unsplash image',
  date: dateWithSuffix(new Date().toISOString()),
  readTime: '4',
  price: 35,
};

export const Blog = Template.bind({});
Blog.args = {
  type: 'blog',
  title: dataObject.title,
  text: dataObject.text,
  imageUri: dataObject.imageUri,
  imageAlt: dataObject.imageAlt,
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
  type: 'product',
  title: dataObject.title,
  text: dataObject.text,
  imageUri: dataObject.imageUri,
  imageAlt: dataObject.imageAlt,
  price: dataObject.price,
};
