import React from 'react';
import Card from './Card';

export default {
  title: 'Global/Components/Card',
  component: Card,
}

const Template = (args) => <Card {...args} />;

const dataObject = {
  title: 'Title can span multiple lines of text',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
  image: {
      asset: {
        sys: {
          uri: 'https://source.unsplash.com/TRAF_LhFCUs',
      }
    }
  },
  date: new Date().toISOString(),
  readTime: 4,
}

export const BlogCard = Template.bind({});
BlogCard.args = { 
  type: 'blog',
  title: dataObject.title,
  text: dataObject.text,
  image: dataObject.image,
  date: dataObject.date,
  readTime: dataObject.readTime,
};

export const Product = Template.bind({});
Product.args = { 
  type: 'product',
  title: dataObject.title,
  image: dataObject.image,
  price: 32,
  rating: 4
};
