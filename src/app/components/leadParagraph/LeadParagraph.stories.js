import React from 'react';

import LeadParagraph from './LeadParagraph';

export default {
  title: 'Global/Components/LeadParagraph',
  component: LeadParagraph,
}

const Template = args => <LeadParagraph {...args} />;
export const Primary = Template.bind({});
Primary.args = { 
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus interdum praesent tortor, elit vel tortor nunc, amet. Tempor nunc natoque eget amet. ',
};
