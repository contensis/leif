import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Global/Components/Footer',
  component: Footer,
}

const Template = () => {
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
  for (let i = 0; dataArray.length < 4; i++){
    dataArray.push(data);
  }
  return <Footer data={dataArray} />;
};

export const Primary = Template.bind({});
