import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { default as CardComponent } from '../Card';
import MockDataLoader from '../../mockDataLoader/MockDataLoader';
import mapEntriesToResults from '~/components/search/transformations/entry-to-card-props.mapper';

import CardMarkdown from './CardMarkdown.mdx';
import { getLocalState } from '~/utils/localStorage';

const options: string[] = JSON.parse(getLocalState('entries'));

interface Props {
  entry: any;
}

export default {
  title: 'Global/Components/Card',
  component: CardComponent,
  argTypes: {
    entry: {
      name: 'Entry',
      control: { type: 'select' },
      options: [...options],
    },
  },
  parameters: {
    docs: {
      page: CardMarkdown,
    },
  },
} as Meta;

const Template: Story<Props> = args => {
  const { entry } = args || {};
  return (
    <>
      <MockDataLoader
        contentTypes={['blogPost', 'pot', 'plant']}
        pageSize={20}
        mapper={mapEntriesToResults}
        selectedEntry={entry}
      >
        <CardComponent
          imageAlt={''}
          imageUri={''}
          isPromoted={false}
          path={''}
          price={[]}
          title={''}
          type={''}
          uri={''}
        />
      </MockDataLoader>
    </>
  );
};

export const MockDataCard = Template.bind({});
MockDataCard.args = {
  entry: options[0],
};
