import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import ImageBlock from '../components/ImageBlock';

storiesOf('Features | Global', module).add(
  'Image Block',
  () => {
    const image = {
      altText: 'Picsum Photo',
      asset: {
        sys: {
          uri: 'https://picsum.photos/id/305/840/480',
        },
      },
    };

    return (
      <ImageBlock
        image={image}
        title={text('Image title', 'Optional image title')}
        text={text(
          'Image text',
          'Image accreditation and information can span multiple lines.'
        )}
      />
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
