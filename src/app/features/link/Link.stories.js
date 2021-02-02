import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './components/Link';

const link = {
  text: 'Live example link',
  path: '/site-link',
};

storiesOf('Features | Global', module).add('Link', () => {
  return <Link uri={link.path}>{link.text}</Link>;
});
