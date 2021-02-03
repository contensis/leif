import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import QuoteBlock from './QuoteBlock';

storiesOf('Features | Global', module).add(
  'Quote Block',
  () => {
    return (
      <QuoteBlock
        quote={text(
          'Quote',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem ridiculus ipsum ac neque, quis morbi. Maecenas ullamcorper iaculis ipsum porttitor. In vitae orci sapien egestas quis senectus.'
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
