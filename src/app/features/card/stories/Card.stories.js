import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Card from '../components/Card';

import tempImage from '../../genericHero/assets/women-at-desk.png';

storiesOf('Features | Global', module).add(
  'Card',
  () => {
    const image = {
      asset: {
        altText: 'Cacti',
        sys: {
          uri: tempImage,
        },
      },
    };
    return (
      <Card
        type="blog"
        title={text('Blog Card Title', 'Title can span multiple lines of text')}
        text={text(
          'Blog Card Text',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.'
        )}
        image={image}
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
