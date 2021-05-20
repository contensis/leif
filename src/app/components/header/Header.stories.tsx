import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import HeaderContainer from './Header.container';
import { Props } from './Header';

export default {
  title: 'Global/Components/Header',
  component: HeaderContainer,
} as Meta;

const Template: Story<Props> = args => (
  <div
    style={{
      margin: '-16px',
    }}
  >
    <HeaderContainer {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  navigation: {
    level_1: {
      products: {
        displayName: 'Products',
        parent: 'root',
        includeInMenu: true,
        path: '/products',
        slug: 'products',
        showChildren: true,
        childCount: 4,
      },
      blogs: {
        displayName: 'Blogs',
        parent: 'root',
        includeInMenu: true,
        path: '/blogs',
        slug: 'blogs',
        showChildren: false,
        childCount: 0,
      },
      'landing-pages': {
        displayName: 'Landing Pages',
        parent: 'root',
        includeInMenu: true,
        path: '/landing-pages',
        slug: 'landing-pages',
        showChildren: true,
        childCount: 2,
      },
      'content-pages': {
        displayName: 'Content Pages',
        parent: 'root',
        includeInMenu: true,
        path: '/content-pages',
        slug: 'content-pages',
        showChildren: true,
        childCount: 2,
      },
    },
    level_2: {
      products: {
        plants: {
          displayName: 'Plants',
          parent: 'root',
          includeInMenu: true,
          path: '/plants',
          slug: 'plants',
          showChildren: false,
          childCount: 0,
        },
        pots: {
          displayName: 'Pots',
          parent: 'root',
          includeInMenu: true,
          path: '/pots',
          slug: 'pots',
          showChildren: false,
          childCount: 0,
        },
        accessories: {
          displayName: 'Accessories',
          parent: 'root',
          includeInMenu: true,
          path: '/accessories',
          slug: 'accessories',
          showChildren: false,
          childCount: 0,
        },
      },
      'landing-pages': {
        'plants-101': {
          displayName: 'Plants 101',
          parent: 'root',
          includeInMenu: true,
          path: '/plants-101',
          slug: 'plants-101',
          showChildren: false,
          childCount: 0,
        },
        'pots-101': {
          displayName: 'Pots 101',
          parent: 'root',
          includeInMenu: true,
          path: '/pots-101',
          slug: 'pots-101',
          showChildren: false,
          childCount: 0,
        },
      },
      'content-pages': {
        'plant-care': {
          displayName: 'Plant Care',
          parent: 'root',
          includeInMenu: true,
          path: '/plant care',
          slug: 'plant care',
          showChildren: false,
          childCount: 0,
        },
        'top-10-pots': {
          displayName: 'Top 10 Pots',
          parent: 'root',
          includeInMenu: true,
          path: '/top-10-pots',
          slug: 'top-10-pots',
          showChildren: false,
          childCount: 0,
        },
      },
    },
  },
};
