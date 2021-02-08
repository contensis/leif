import React from 'react';
import { storiesOf } from '@storybook/react';

import IconWithText from './IconWithText';

export default {
  title: 'Product/Components/IconWithText',
  component: IconWithText,
    argTypes: {
    icon: {
      control: {
        type: 'select',
        options: [
          'cloudy', 
          'wateringCan', 
          'humidity'
        ],
      },
    },
  },
}

const Template = ({icon, ...args}) => {
  return <IconWithText icon={icon} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  icon: 'cloudy',
  title: 'Condition heading',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.'
}
