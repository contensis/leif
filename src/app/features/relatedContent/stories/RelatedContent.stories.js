import React from 'react';
import { storiesOf } from '@storybook/react';
// import { text } from '@storybook/addon-knobs';

import tempImage from '../../genericHero/assets/women-at-desk.png';
import RelatedContent from '../components/RelatedContent';

storiesOf('Features | Global', module).add(
  'Related Content',
  () => {
    const image = {
      asset: {
        altText: 'Cacti',
        sys: {
          uri: tempImage,
        },
      },
    };

    const results = [
      {
        title: 'Blog title can span multiple lines of text',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
        image: image,
        readTime: 2,
        sys: {
          contentTypeId: 'blog',
        },
        date: new Date().toISOString(),
      },
      {
        title: 'Blog title can span multiple lines of text',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
        image: image,
        readTime: 2,
        sys: {
          contentTypeId: 'blog',
        },
        date: new Date().toISOString(),
      },
      {
        title: 'Blog title can span multiple lines of text',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
        image: image,
        readTime: 2,
        sys: {
          contentTypeId: 'blog',
        },
        date: new Date().toISOString(),
      },
    ];

    const link = {
      label: 'View all blogs',
      href: '#',
      type: 'secondary',
    };

    return (
      <RelatedContent title="Related blogs" results={results} link={link} />
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
