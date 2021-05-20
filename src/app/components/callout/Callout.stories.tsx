import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Callout, { Props } from './Callout';

export default {
  title: 'Content/Components/Callout',
  component: Callout,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['warning', 'success', 'note'],
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ type, ...args }) => {
  return <Callout {...args} type={type} />;
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'note',
  title: 'Callout title',
  text: 'Tellus sit pellentesque sit sed sed faucibus sit quam. Massa lorem vestibulum, non viverra interdum aliquam amet.',
};
