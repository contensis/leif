import React from 'react';
import { storiesOf } from '@storybook/react';

import Hamburger from '../components/Hamburger';

storiesOf('Features | Global', module).add(
  'Hamburger',
  () => {
    return <Hamburger />;
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
