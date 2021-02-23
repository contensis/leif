import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Filters, { Props } from './Filters';

export default {
  title: 'Search/Components/Filters',
  component: Filters,
} as Meta;

const Template: Story<Props> = args => <Filters {...args} />;

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

const filters = [];
for (let i = 0; filters.length < 2; i++) {
  filters.push(
    {
      type: 'dropdown',
      label: 'Browse by category',
      id: `category-${i}`,
      options: options,
    },
  );
}

export const Primary = Template.bind({});
Primary.args = {
  filters: [
    ...filters,
    {
      type: 'sort',
      label: 'Sort by:',
      id: 'sort',
      options: [
        {
          value: 'asc',
          label: 'asc',
        },
        {
          value: 'desc',
          label: 'desc',
        },
      ],
    },
  ],
};
