import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

// Component
import Card, { Props } from './Card';

// Utils
import dateWithSuffix from '../../utils/dateWithSuffix';

// Get Entry by ID
import { useGetEntryByEntryId } from '@zengenti/contensis-entry-picker-storybook-addon';

// Mapper
import mapEntriesToResults from '../search/transformations/entry-to-card-props.mapper';

export default {
  title: 'Global/Components/Card',
  component: Card,
} as Meta;
const Template: Story<Props> = (args: Props, { globals: { entryId } }) => {
  const entry = useGetEntryByEntryId(entryId);
  const mappedEntry = mapEntriesToResults([entry]);
  return <Card {...{ ...args, ...mappedEntry[0] }} />;
};

const dataObject = {
  title: 'Title can span multiple lines of text',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
  imageUri: 'https://source.unsplash.com/TRAF_LhFCUs',
  imageAlt: 'Unsplash Image',
  date: dateWithSuffix(new Date().toISOString()),
  readTime: '4',
};

export const Blog = Template.bind({});
Blog.args = {
  contentTypes: ['blogPost', 'pot', 'plant'],
  type: 'blog',
  title: dataObject.title,
  text: dataObject.text,
  imageUri: dataObject.imageUri,
  imageAlt: dataObject.imageAlt,
  date: dataObject.date,
  readTime: dataObject.readTime,
};

export const Product = Template.bind({});
Product.args = {
  type: 'product',
  title: dataObject.title,
  imageUri: dataObject.imageUri,
  imageAlt: dataObject.imageAlt,
  price: [32],
  rating: '4',
};

export const Content = Template.bind({});
Content.args = {
  type: 'content',
  title: dataObject.title,
  text: dataObject.text,
  imageUri: dataObject.imageUri,
  imageAlt: dataObject.imageAlt,
};
