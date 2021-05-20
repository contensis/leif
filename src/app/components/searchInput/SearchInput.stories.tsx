import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import SearchInput, { Props } from './SearchInput';

export default {
  title: 'Search/Components/SearchInput',
  component: SearchInput,
} as Meta;

const Template: Story<Props> = args => <SearchInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Search',
};
