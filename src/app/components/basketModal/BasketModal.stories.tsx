import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import BasketModal, { Props } from './BasketModal';

export default {
  title: 'Product/Components/BasketModal',
  component: BasketModal,
} as Meta;

const Template: Story<Props> = args => {
  return <BasketModal {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  image: 'https://source.unsplash.com/SHiqkFW5VO4',
  name: 'Fern',
  variant: '32x42cm',
  price: 34,
};
