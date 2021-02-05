import React from 'react';

import ImageBlock from './ImageBlock';

export default {
  title: 'Global/Components/ImageBlock',
  component: ImageBlock,
}

const Template = args => <ImageBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Optional image title',
  text: 'Image accreditation and information can span multiple lines.',
  image: {
    asset: {
      sys: {
        uri: 'https://source.unsplash.com/6hgrfOJhr74'
      }
    }
  }
}
