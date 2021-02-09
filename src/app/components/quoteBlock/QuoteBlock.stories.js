import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import QuoteBlock from './QuoteBlock';


export default {
  title: 'Global/Components/QuoteBlock',
  component: QuoteBlock,
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
    rating: {
      control: {
        type: 'select',
        options: [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
        ]
      },
    },
    showAuthor: {
      control: {
        type: 'boolean',
      },
    },
    showRating: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = ({ showRating, showAuthor, rating = '4', firstName = 'Jane', lastName = 'Doe', ...args }) => {
  const PersonObject = {
    firstName: firstName,
    lastName: lastName,
    photo: {
      asset: {
        sys: {
          uri: 'https://source.unsplash.com/ROJFuWCsfmA',
        }
      }
    }
  }
  return (
    <QuoteBlock
      author={showAuthor ? PersonObject : null}
      rating={showRating ? rating : null}
      {...args}
    />
  ) 
};
export const Primary = Template.bind({});
Primary.args = { 
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem ridiculus ipsum ac neque, quis morbi. Maecenas ullamcorper iaculis ipsum porttitor. In vitae orci sapien egestas quis senectus.',
};
