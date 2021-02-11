import React from 'react';

import GenericHero from './GenericHero';
import tempImage from './assets/women-at-desk.png';

export default {
  title: 'Global/Components/GenericHero',
  component: GenericHero,
}

const Template = args => <GenericHero {...args} />;
export const Primary = Template.bind({});
Primary.args = { 
  title: 'Blog title can span multiple lines of text',
  image: {
    asset: {
      sys: {
        uri: tempImage,
      }
    }
  }
};
