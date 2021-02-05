import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialShare from './SocialShare';

export default {
  title: 'Global/Components/SocialShare',
  component: SocialShare,
}

const Template = () => {
  return <SocialShare  />;
};

export const Primary = Template.bind({});
