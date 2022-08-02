import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

// Component
import Calendar, { Props } from './Calendar';

export default {
  title: 'Global/Components/DateTime',
  component: Calendar,
} as Meta;

const Template: Story<Props> = args => {
  return <Calendar {...args} />;
};

// const data = {
//   from: '2022-08-02T17:00:00',
//   to: '2022-08-12T14:00:00',
// };

// const from = formatDate(data.from, 'yy');

export const dateTime = Template.bind({});
dateTime.args = {
  date: '2022-08-02T17:00:00',
};
