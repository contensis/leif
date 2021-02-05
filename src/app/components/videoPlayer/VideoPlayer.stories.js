import React from 'react';

import VideoPlayer from './VideoPlayer';


export default {
  title: 'Global/Components/VideoPlayer',
  component: VideoPlayer,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'YouTube', 
          'Internal', 
        ],
      },
    },
  },
}

const Template = ({ type, ...args }) => <VideoPlayer type={type} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Bean Time-Lapse - 25 days | Soil cross section',
  type: "YouTube",
  externalURL: "https://youtu.be/w77zPAtVTuI"
}
