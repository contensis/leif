import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import HeaderContainer from './Header.container';

export default {
  title: 'Global/Components/Header',
  component: HeaderContainer,
} as Meta;

const Template = () => <HeaderContainer />;

export const Primary = Template.bind({});
