import React from 'react';

import Accordion from './Accordion';

export default {
  title: 'Content/Components/Accordion',
  component: Accordion,
};
const Template = (args) => {
  return <Accordion {...args} />;
};

const items = [];
const item = {
  title: 'Accordion title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.'
}
for (let i = 0; items.length < 4; i++){
  items.push(item);
}

export const Primary = Template.bind({});
Primary.args = {
  title: 'Accordion title',
  items: items,
};
