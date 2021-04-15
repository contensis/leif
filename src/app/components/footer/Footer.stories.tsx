import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Footer, { Props } from './Footer';

export default {
  title: 'Global/Components/Footer',
  component: Footer,
} as Meta;

const Template: Story<Props> = args => {
  return <Footer {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
