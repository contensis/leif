import React from 'react';
import { storiesOf } from '@storybook/react';
// import { text } from '@storybook/addon-knobs';

import Footer from '../components/Footer';

storiesOf('Features | Global', module).add(
  'Footer',
  () => {
    const data = [
      {
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
      },
      {
        title: 'Title two',
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
      },
      {
        title: 'Title three',
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
      },
      {
        title: 'Title four',
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
      },
    ];

    return <Footer data={data} />;
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
