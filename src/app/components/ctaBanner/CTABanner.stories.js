import React from 'react';

import CTABanner from './CTABanner';

import tempImage from './assets/laptop-and-plant.png';

export default {
  title: 'Global/Components/CTABanner',
  component: CTABanner,
  argTypes: {
    btnType: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'white'
        ],
      },
    },
    btnLabel: {
      control: {
        type: 'text',
      },
    },
  },
}

const Template = ({ btnType = "primary", btnLabel = 'Find out more', ...args }) => {
  const cta = {
    type: btnType,
    label: btnLabel,
    href: '#'
  }
  return <CTABanner cta={cta} {...args} />;
};


export const Primary = Template.bind({});
Primary.args = {
  title: 'CTA title can span multiple lines',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisl dictumst amet arcunim elit sed consectetur.',
  image: {
    asset: {
      sys: {
        uri: tempImage,
      }
    }
  }
}
