import { ComponentBlock, RenderBlockProps } from '@contensis/canvas-react';
import React from 'react';
import Accordion, { Props as AccordionProps } from './Accordion';
import { AccordionCanvasMapping } from './Accordion.mapper';
import { mapJson } from '@zengenti/contensis-react-base/util';

const AccordionCanvas = (
  props: RenderBlockProps<ComponentBlock<AccordionProps>>
) => {
  return <Accordion {...mapJson(props, AccordionCanvasMapping)} />;
};

export default AccordionCanvas;
