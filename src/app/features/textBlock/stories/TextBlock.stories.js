import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import TextBlock from '../components/TextBlock';

storiesOf('Features | Global', module).add(
  'Lead Paragraph | TextBlock',
  () => {
    return (
      <>
        <TextBlock
          isLeadParagraph
          text={text(
            'Lead Paragraph',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus interdum praesent tortor, elit vel tortor nunc, amet. Tempor nunc natoque eget amet. '
          )}
        />
        <TextBlock
          text={text(
            'Text Block',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh. Orci, molestie nisi, aliquam accumsan, eros, ipsum. Ante velit ullamcorper ultricies morbi. Malesuada ipsum felis, fermentum mauris. Diam mauris ultrices sed nunc, eget neque lectus porttitor. Eget duis iaculis sed pharetra. Viverra risus amet nisl, volutpat vestibulum cursus donec id aliquam. Diam sollicitudin curabitur hac consectetur elementum at. Nisi lectus bibendum aliquam placerat tortor.'
          )}
        />
      </>
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
