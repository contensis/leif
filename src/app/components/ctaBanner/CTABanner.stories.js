import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import CTABanner from './CTABanner';

import tempImage from './assets/laptop-and-plant.png';

storiesOf('Features | Global', module).add(
  'CTA Banner',
  () => {
    const cta = {
      label: 'Sign up',
      uri: 'www.contensis.com',
    };

    const image = {
      asset: {
        altText: 'Laptop and plant',
        sys: {
          uri: tempImage,
        },
      },
    };

    return (
      <CTABanner
        image={image}
        title={text('CTA Title', 'CTA title can span multiple lines')}
        text={text(
          'CTA Text',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.'
        )}
        cta={cta}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
