import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import VideoPlayer, { Props } from './VideoPlayer';

export default {
  title: 'Global/Components/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['YouTube', 'Internal'],
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ type, ...args }) => (
  <VideoPlayer type={type} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Bean Time-Lapse - 25 days | Soil cross section',
  type: 'YouTube',
  externalURL: 'https://youtu.be/w77zPAtVTuI',
};
