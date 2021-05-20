import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import IconWithText, { Props } from './IconWithText';

export default {
  title: 'Product/Components/IconWithText',
  component: IconWithText,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['cloudy', 'wateringCan', 'humidity'],
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ icon, ...args }) => {
  return <IconWithText icon={icon} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  icon: 'cloudy',
  title: 'Condition heading',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.',
};
