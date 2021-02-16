import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Explore, { Props } from './Explore';

export default {
  title: 'Content/Components/Explore',
  component: Explore,
};

const Template: Story<Props> = args => {
  return <Explore {...args} />;
};

const result = {
  title: 'Card title can span multiple lines',
  image: {
    asset: {
      sys: {
        uri: 'https://source.unsplash.com/m2J105CzEAU',
      },
    },
  },
};

const results = [];
for (let i = 0; results.length < 4; i++) {
  results.push(result);
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Explore more',
  results: results,
};
