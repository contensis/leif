import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import QuoteBlock, { Props } from './QuoteBlock';

export default {
  title: 'Global/Components/QuoteBlock',
  component: QuoteBlock,
} as Meta;

const Template: Story<Props> = args => {
  return <QuoteBlock {...args} />;
};
export const Primary = Template.bind({});
Primary.args = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem ridiculus ipsum ac neque, quis morbi. Maecenas ullamcorper iaculis ipsum porttitor. In vitae orci sapien egestas quis senectus.',
  rating: '3',
  name: 'Jane Doe',
  photo: 'https://source.unsplash.com/ROJFuWCsfmA',
};
