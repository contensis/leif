import React from 'react';
import RelatedLinks from './RelatedLinks';

export default {
  title: 'Content/Components/RelatedLinks',
  component: RelatedLinks,
}
const Template = (args) => <RelatedLinks {...args} />;

  const link = {
    title: 'Related link title can span multiple lines',
    image: {
      asset: {
        sys: {
          uri: 'https://source.unsplash.com/FV_PxCqgtwc',
        },
      },
    },
  };
  const links = [];
  for (let i = 0; links.length < 4; i++) {
    links.push(link);
  }




export const Product = Template.bind({});
Product.args = { 
  title: 'Related Links',
  links: links,
};
