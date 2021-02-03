import React from 'react';
import { storiesOf } from '@storybook/react';

import BlogInformation from './BlogInformation';

storiesOf('Features | Global', module).add(
  'Blog Information',
  () => {
    const person = {
      firstName: 'Lego',
      lastName: 'Man',
      photo: {
        alt: 'Lego man',
        asset: {
          sys: {
            uri: 'https://randomuser.me/api/portraits/med/lego/6.jpg',
          },
        },
      },
    };

    return (
      <BlogInformation
        person={person}
        readTime={2}
        date={new Date().toISOString()}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
