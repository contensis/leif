import React from 'react';

import LinkButton from './LinkButton';

export default {
  title: 'Global/Components/LinkButton',
  component: LinkButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'primary', 
          'secondary', 
          'white'
        ],
      },
    },
  },
}

const Template = ({ type, ...args }) => {
  return <LinkButton type={type} {...args} />;
};

const dataObject = {
  label: 'Find out more',
  href: '#',
  onClick: () => console.info('Clicked!')
}

export const Primary = Template.bind({});
Primary.args = { 
  type: 'primary',
  label: dataObject.label,
  href: dataObject.href,
  onClick: dataObject.onClick,
  isHollow: false,
  isDisabled: false,
  hasArrow: false,
};
