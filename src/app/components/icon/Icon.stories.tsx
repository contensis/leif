import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Icon from './Icon';

export default {
  title: 'Global/Components/Icon',
  component: Icon,
} as Meta;

const IconDictionary = [
  'account',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'basket',
  'block',
  'calendar',
  'chat',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'clock',
  'close',
  'cloudy',
  'code',
  'delete',
  'edit',
  'facebook',
  'figma',
  'filter',
  'full-size',
  'humidity',
  'information',
  'kebab',
  'leaf',
  'link',
  'linkedin',
  'location',
  'menu',
  'minus',
  'plant-solid',
  'plant',
  'play',
  'plus',
  'pot',
  'product-solid',
  'product',
  'question',
  'search',
  'sort',
  'star',
  'storybook',
  'tick',
  'twitter',
  'watering-can',
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
        <Icon key={`${icon}-${idx}`} type={icon} />
        <span>{icon}</span>
      </div>
    );
  });
};

export const Primary = Template.bind({});
