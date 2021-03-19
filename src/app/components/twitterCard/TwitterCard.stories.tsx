import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TwitterCard, { Props } from './TwitterCard';

export default {
  title: 'Content/Components/TwitterCard',
  component: TwitterCard,
} as Meta;

const Template: Story<Props> = args => <TwitterCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  tweet: 'https://twitter.com/CNN/status/1372831221168926723',
};
