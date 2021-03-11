import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CardRow, { Props } from './CardRow';

export default {
  title: 'Landing/Components/CardRow',
  component: CardRow,
} as Meta;

const Template: Story<Props> = args => <CardRow {...args} />;

const relatedLinks = [];
const relatedLink = {
  title: 'Related link title can span multiple lines',
  imageUri: 'https://source.unsplash.com/TRAF_LhFCUs',
  imageAlt: 'Unsplash',
};

for (let i = 0; relatedLinks.length < 3; i++) {
  relatedLinks.push(relatedLink);
}

const results = [];
const result = {
  title: 'Card title can span multiple lines',
  imageUri: 'https://source.unsplash.com/UcfKYTan-LU',
  imageAlt: 'Unsplash',
};
for (let i = 0; results.length < 2; i++) {
  results.push(result);
}

export const Primary = Template.bind({});
Primary.args = {
  results: results,
  relatedLinks: relatedLinks,
};
