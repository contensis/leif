import React from 'react';
import { storiesOf } from '@storybook/react';
// import { text } from '@storybook/addon-knobs';

import VideoPlayer from '../components/VideoPlayer';

storiesOf('Features | Global', module).add(
  'Video Player',
  () => {
    return (
      <VideoPlayer
        title="Bean Time-Lapse - 25 days | Soil cross section"
        type="YouTube"
        externalURL="https://youtu.be/w77zPAtVTuI"
      />
    );
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
