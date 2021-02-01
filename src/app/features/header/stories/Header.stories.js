import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../components/Header';

storiesOf('Features | Global', module).add(
  'Header',
  () => {
    return <Header />;
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
