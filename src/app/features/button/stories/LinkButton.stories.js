import React from 'react';
import { storiesOf } from '@storybook/react';

import LinkButton from '../components/LinkButton';
import { text } from '@storybook/addon-knobs';

storiesOf('Features | Global', module).add('Link Button', () => {
  return (
    <LinkButton
      type="primary"
      // isHollow
      // isDisabled
      hasArrow
      label={text('Link Button Text', 'Find out more')}
      href="#"
      onClick={() => alert('Clicked')}
    />
  );
});
