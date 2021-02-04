import React from 'react';
import { storiesOf } from '@storybook/react';
import { Author } from './Author';

storiesOf('Features | Global', module).add(
  'Author',
  () => {
    const person = {
      firstName: 'John',
      lastName: 'Smith',
      photo: {
        altText: 'John Smith',
        asset: {
          sys: {
            uri: 'https://randomuser.me/api/portraits/med/lego/6.jpg',
          },
        },
      },
    };

    return <Author person={person} />;
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
