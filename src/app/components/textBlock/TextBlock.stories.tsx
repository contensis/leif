import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextBlock, { Props } from './TextBlock';

export default {
  title: 'Global/Components/TextBlock',
  component: TextBlock,
} as Meta;

const Template: Story<Props> = args => <TextBlock {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  text: `
    <h1>Header title</h1>
    <h2>Header title</h2>
    <h3>Header title</h3>
    <h4>Header title</h4>
    <h5>Header title</h5>
    <h6>Header title</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh. Orci, molestie nisi, aliquam accumsan, eros, ipsum. Ante velit ullamcorper ultricies morbi. Malesuada ipsum felis, fermentum mauris. Diam mauris ultrices sed nunc, eget neque lectus porttitor. Eget duis iaculis sed pharetra. Viverra risus amet nisl, volutpat vestibulum cursus donec id aliquam. Diam sollicitudin curabitur hac consectetur elementum at. Nisi lectus bibendum aliquam placerat tortor.'</p>
    <ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lectus vitae tortor vitae diam.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lectus vitae tortor vitae diam.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas lectus vitae tortor vitae diam.</li>
    </ul>
    <table>
    <thead>
    <tr>
    <td>Cell header one</td>
    <td>Cell header two</td>
    <td>Cell header three</td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Row one</td>
    <td>Lorem ipsum.</td>
    <td>15</td>
    </tr>
    <tr>
    <td>Row two</td>
    <td>Lorem ipsum dolor sit amet.</td>	
    <td>962</td>
    </tr>
    <tr>
    <td>Row three</td>
    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nulla aliquet..</td>	
    <td>1000</td>
    </tr>
    <tr>
    <td>Row four</td>
    <td>Lorem ipsum dolor sit amet, consectetur adipiscing.</td>	
    <td>332</td>
    </tr>
    </tbody>
    </table>
    `,
};
