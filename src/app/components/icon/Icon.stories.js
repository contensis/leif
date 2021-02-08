import React from 'react';
import { storiesOf } from "@storybook/react";

import Icon from './Icon';

export default {
  title: 'Global/Components/Icon',
  component: Icon,
}

const IconDictionary = [
  'arrow',
  'chevron',
  'cross',
  'facebook',
  'linkedIn',
  'link',
  'pot',
  'search',
  'star',
  'tag',
  'twitter',
  'minus',
  'plus',
  'kebab',
  'plant',
  'sort',
  'tick',
  'account',
  'basket',
  'block',
  'calendar',
  'chat',
  'clock',
  'cloudy',
  'code',
  'delete',
  'edit',
  'figma',
  'filter',
  'fullSize',
  'humidity',
  'information',
  'leif',
  'location',
  'play',
  'product',
  'question',
  'storybook',
  'wateringCan',
  'wheelbarrow',
];

const Template = () => {
  return IconDictionary.map((icon, idx) => {
    return <Icon key={`${icon}-${idx}`} type={icon} hasDefaultStyles />;
  })
};

export const Primary = Template.bind({});
