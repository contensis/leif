import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';
import { mapJson } from '@zengenti/contensis-react-base/util';
import React from 'react';
import CardRow, { Props as CardRowProps } from '~/components/cardRow/CardRow';
import { CardRowCanvasMapping } from './CardRow.mapper';

const FeatureRowCanvas = (
  props: RenderBlockProps<ComponentBlock<CardRowProps>>
) => {
  return <CardRow {...mapJson(props, CardRowCanvasMapping)} />;
};

export default FeatureRowCanvas;
