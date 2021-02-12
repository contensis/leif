import React from 'react';

import Explore from './Explore';

export default {
  title: 'Content/Components/Explore',
  component: Explore,
};

const Template = (args) => {
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
  return <Explore results={results} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Explore more',
};
