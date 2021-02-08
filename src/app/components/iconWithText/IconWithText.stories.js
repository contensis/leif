import React from 'react';
import { storiesOf } from '@storybook/react';

import IconWithText from './IconWithText';

export default {
  title: 'Product/Components/IconWithText',
  component: IconWithText,
}

const Template = args => {
  return <IconWithText {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  icon: 'plant',
  title: 'Condition heading',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.'
}
