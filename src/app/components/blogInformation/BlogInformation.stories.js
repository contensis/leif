import React from 'react';

import BlogInformation from './BlogInformation';

export default {
  title: 'Blog/Components/BlogInformation',
  component: BlogInformation,
  argTypes: {
    firstName: {
      control: {
        type: 'text',
      },
    },
    lastName: {
      control: {
        type: 'text',
      },
    },
  },
}
const Template = ({ firstName = 'John', lastName = 'Smith', ...args }) => {
  const person = {
    firstName: firstName,
    lastName: lastName,
    photo: {
        asset: {
          sys: {
            uri: 'https://randomuser.me/api/portraits/med/lego/6.jpg',
          },
        },
    }
  }
    return <BlogInformation person={person} {...args} />
};
export const Primary = Template.bind({});
Primary.args = { 
  readTime: 7,
  date: new Date().toISOString(),
};
