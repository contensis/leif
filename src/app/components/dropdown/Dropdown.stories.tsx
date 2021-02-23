import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Dropdown, { Props } from './Dropdown';

export default {
  title: 'Search/Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<Props> = args => <Dropdown {...args} />;

const MakeOption = (i: number) => {
  return {
    value: `category-${i}`,
    label: `Category ${i}`,
  };
};

const options: any = [];
for (let i = 0; options.length < 4; i++) {
  options.push(MakeOption(i));
}

export const Primary = Template.bind({});
Primary.args = {
  options: options,
  label: 'Browse by category',
  id: 'category',
};
