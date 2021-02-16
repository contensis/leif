import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Footer, { Props } from './Footer';

export default {
  title: 'Global/Components/Footer',
  component: Footer,
} as Meta;

const Template: Story<Props> = args => {
  return <Footer {...args} />;
};

const dataArray = [];
const data = {
  title: 'Title one',
  links: [
    {
      title: 'Link one',
      uri: 'www.google.co.uk',
    },
    {
      title: 'Link two',
      uri: 'www.google.co.uk',
    },
    {
      title: 'Link three',
      uri: 'www.google.co.uk',
    },
    {
      title: 'Link four',
      uri: 'www.google.co.uk',
    },
  ],
};
for (let i = 0; dataArray.length < 4; i++) {
  dataArray.push(data);
}

export const Primary = Template.bind({});
Primary.args = {
  data: dataArray,
};
