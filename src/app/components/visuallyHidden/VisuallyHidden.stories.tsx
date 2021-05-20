import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import VisuallyHidden, { Props } from './VisuallyHidden';

export default {
  title: 'Global/Components/VisuallyHidden',
  component: VisuallyHidden,
} as Meta;

const Template: Story<Props> = args => {
  return (
    <>
      <button>
        <VisuallyHidden {...args} />
        <svg aria-hidden width="32" height="32">
          <path d="M16 18l8-8h-6v-8h-4v8h-6zM23.273 14.727l-2.242 2.242 8.128 3.031-13.158 4.907-13.158-4.907 8.127-3.031-2.242-2.242-8.727 3.273v8l16 6 16-6v-8z"></path>
        </svg>
      </button>
      <div id="mainContent">
        <p>{`Provides text for screen readers that is visually hidden. It is the logical opposite of the aria-hidden attribute.`}</p>
        <p>{`In the above example, screen readers will announce "Save" and will ignore the icon.`}</p>
      </div>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Save',
};
