import React from 'react';

import GenericHero from './GenericHero';

export default {
  title: 'Global/Components/GenericHero',
  component: GenericHero,
}

const Template = args => <GenericHero {...args} />;
export const Primary = Template.bind({});
Primary.args = { 
  title: 'Blog title can span multiple lines of text',
};
