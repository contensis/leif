import React from 'react';

import Link from './Link';

export default {
  title: 'Global/Components/Link',
  component: Link,
}

const Template = args => <Link {...args}>{args.title}</Link>

export const Primary = Template.bind({});
Primary.args = {
  title: 'Live example link',
  uri: '/site-link',
}
