import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ImageBlock, { Props } from './ImageBlock';

export default {
  title: 'Global/Components/ImageBlock',
  component: ImageBlock,
} as Meta;

const Template: Story<Props> = args => <ImageBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Image accreditation and information can span multiple lines.',
  path: 'https://source.unsplash.com/6hgrfOJhr74',
  alt: 'Unsplash Image',
};
