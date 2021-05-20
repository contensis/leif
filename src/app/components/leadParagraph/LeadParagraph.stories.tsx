import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LeadParagraph, { Props } from './LeadParagraph';

export default {
  title: 'Global/Components/LeadParagraph',
  component: LeadParagraph,
} as Meta;

const Template: Story<Props> = args => <LeadParagraph {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus interdum praesent tortor, elit vel tortor nunc, amet. Tempor nunc natoque eget amet. ',
};
