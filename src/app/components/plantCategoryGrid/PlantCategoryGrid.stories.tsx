import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PlantCategoryGrid from './PlantCategoryGrid';
import { Props } from './PlantCategoryGrid.d';

export default {
  title: 'Landing/Components/PlantCategoryGrid',
  component: PlantCategoryGrid,
} as Meta;

const Template: Story<Props> = args => <PlantCategoryGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Find your perfect plant',
  categories: [
    {
      title: 'Low Light',
      description: 'Thrives in shady spots and north-facing rooms',
      image: {
        src: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600',
        alt: 'A snake plant in a dark corner',
      },
      path: '/collections/low-light',
    },
    {
      title: 'Easy Care',
      description: 'Perfect for beginners and busy plant parents',
      image: {
        src: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600',
        alt: 'A pothos plant on a shelf',
      },
      path: '/collections/easy-care',
    },
    {
      title: 'Pet-Friendly',
      description: 'Safe for cats, dogs and curious noses',
      image: {
        src: 'https://images.unsplash.com/photo-1598880940942-e6854d7b3bef?w=600',
        alt: 'A spider plant in a hanging planter',
      },
      path: '/collections/pet-friendly',
    },
  ],
};
