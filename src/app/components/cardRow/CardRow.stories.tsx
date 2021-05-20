import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CardRow, { Props } from './CardRow';

export default {
  title: 'Landing/Components/CardRow',
  component: CardRow,
} as Meta;

const Template: Story<Props> = args => <CardRow {...args} />;

const contentArray = [];
const columnArray = [];
const result = {
  title: 'Card title can span multiple lines',
  imageUri: 'https://source.unsplash.com/UcfKYTan-LU',
  imageAlt: 'Unsplash',
};
for (let i = 0; contentArray.length < 2; i++) {
  contentArray.push(result);
  columnArray.push(result);
}

export const Primary = Template.bind({});
Primary.args = {
  results: {
    contentArray,
    columnArray,
  },
};
