import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FeaturedCTA, { Props } from './FeaturedCTA';

export default {
  title: 'Landing/Components/FeaturedCTA',
  component: FeaturedCTA,
} as Meta;

const Template: Story<Props> = args => <FeaturedCTA {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image: {
    asset: {
      sys: {
        uri: 'https://source.unsplash.com/0dg4rsnL9WE',
      },
    },
  },
  title: 'Featured plant name can span multiple lines',
  text: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh. Orci, molestie nisi, aliquam accumsan, eros, ipsum.</p>
    <ul>
    <li>Lorem ipsum dolor sit ametelit.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
    </ul>
    `,
  cta: {
    label: 'Find out more',
    href: '#',
  },
};
