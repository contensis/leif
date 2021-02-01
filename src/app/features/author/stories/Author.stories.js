import React from 'react';
import { storiesOf } from '@storybook/react';

import Author from '../components/Author';

storiesOf('Features | Global', module).add(
  'Author',
  () => {
    const person = {
      firstName: 'Lego',
      lastName: 'Man',
      photo: {
        altText: 'Lego man',
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
