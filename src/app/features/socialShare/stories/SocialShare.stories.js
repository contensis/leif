import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialShare from '../components/SocialShare';

storiesOf('Features | Global', module).add(
  'Social Share',
  () => {
    return <SocialShare />;
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
