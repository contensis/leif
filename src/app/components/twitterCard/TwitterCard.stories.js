import React from 'react';

import TwitterCard from './TwitterCard';

export default {
  title: 'Content/Components/TwitterCard',
  component: TwitterCard,
};

const Template = args => <TwitterCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  twitterHandle: 'AmazingPlants',
};
