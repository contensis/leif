import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import SocialShare from './SocialShare';

export default {
  title: 'Global/Components/SocialShare',
  component: SocialShare,
} as Meta;

const Template = () => {
  return <SocialShare />;
};

export const Primary = Template.bind({});
