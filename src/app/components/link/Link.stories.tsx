import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Link, { Props } from './Link';

export default {
  title: 'Global/Components/Link',
  component: Link,
} as Meta;

const Template: Story<Props> = args => <Link {...args}>{args.title}</Link>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Live example link',
  uri: '/site-link',
};
