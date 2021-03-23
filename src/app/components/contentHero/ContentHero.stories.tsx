import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ContentHero, { Props } from './ContentHero';

export default {
  title: 'Content/Components/ContentHero',
  component: ContentHero,
} as Meta;

const Template: Story<Props> = args => {
  return <ContentHero {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Content page title can span multiple lines',
  bgImageUri: 'https://source.unsplash.com/00fCk2lZn1c',
};
