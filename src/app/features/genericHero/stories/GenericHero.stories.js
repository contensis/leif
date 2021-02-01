import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import GenericHero from '../components/GenericHero';

storiesOf('Features | Global', module).add(
  'Generic Hero',
  () => {
    return (
      <GenericHero
        title={text('Title', 'Title can span multiple lines of text')}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
