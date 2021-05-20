import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RelatedLinks, { Props } from './RelatedLinks';

export default {
  title: 'Content/Components/RelatedLinks',
  component: RelatedLinks,
} as Meta;

const Template: Story<Props> = args => <RelatedLinks {...args} />;

const link = {
  displayName: 'Related link title can span multiple lines',
  path: '/',
  entry: {
    primaryImage: {
      altText: 'Unsplash image',
      asset: {
        title: 'Unsplash Image',
        sys: {
          uri: 'https://source.unsplash.com/FV_PxCqgtwc',
        },
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
  links,
};
