import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PromotedProduct, { Props } from './PromotedProduct';

export default {
  title: 'Landing/Components/PromotedProduct',
  component: PromotedProduct,
} as Meta;

const Template: Story<Props> = args => <PromotedProduct {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  video: {
    title: 'Bean Time-Lapse - 25 days | Soil cross section',
    type: 'YouTube',
    externalURL: 'https://youtu.be/w77zPAtVTuI',
  },
  imageUri: 'https://source.unsplash.com/0dg4rsnL9WE',
  imageAlt: 'Unsplash image',
  title: 'Featured plant name can span multiple lines',
  text: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh. Orci, molestie nisi, aliquam accumsan, eros, ipsum.</p>
    <ul>
    <li>Lorem ipsum dolor sit ametelit.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
    </ul>
    `,
  ctaLink: '/',
  ctaText: 'Find out more',
};
