import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Icon from './Icon';

export default {
  title: 'Global/Components/Icon',
  component: Icon,
} as Meta;

const IconDictionary = [
  'arrow',
  'chevron',
  'cross',
  'facebook',
  'linkedin',
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
    return (
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft: '16px',
        }}
      >
        <Icon key={`${icon}-${idx}`} type={icon} hasDefaultStyles />
        <span>{icon}</span>
      </div>
    );
  });
};

export const Primary = Template.bind({});
