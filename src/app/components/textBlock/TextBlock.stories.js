import React from 'react';

import TextBlock from './TextBlock';

export default {
  title: 'Global/Components/TextBlock',
  component: TextBlock,
}

const Template = args => <TextBlock {...args} />;
export const Primary = Template.bind({});
Primary.args = { 
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh. Orci, molestie nisi, aliquam accumsan, eros, ipsum. Ante velit ullamcorper ultricies morbi. Malesuada ipsum felis, fermentum mauris. Diam mauris ultrices sed nunc, eget neque lectus porttitor. Eget duis iaculis sed pharetra. Viverra risus amet nisl, volutpat vestibulum cursus donec id aliquam. Diam sollicitudin curabitur hac consectetur elementum at. Nisi lectus bibendum aliquam placerat tortor.',
};
