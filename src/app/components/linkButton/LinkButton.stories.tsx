import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LinkButton, { Props } from './LinkButton';

export default {
  title: 'Global/Components/LinkButton',
  component: LinkButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'white'],
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ type, ...args }) => {
  return <LinkButton type={type} {...args} />;
};

const dataObject = {
  label: 'Find out more',
  href: '#',
  onClick: () => console.info('Clicked!'),
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: dataObject.label,
  href: dataObject.href,
  onClick: dataObject.onClick,
  isHollow: false,
  isDisabled: false,
  icon: 'arrow-right',
};
