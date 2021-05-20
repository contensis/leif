import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion, { Props } from './Accordion';

export default {
  title: 'Content/Components/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<Props> = args => {
  return <Accordion {...args} />;
};

const items = [];
const item = {
  title: 'Accordion title',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.',
};
for (let i = 0; items.length < 4; i++) {
  items.push(item);
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Accordion title',
  items,
};
