import React from 'react';

import {
  RenderBlockProps,
  PanelBlock as PanelBlockProps,
  Panel,
} from '@contensis/canvas-react';
import CalloutStyled from '~/components/callout/Callout.styled';
import { mapJson } from '@zengenti/contensis-react-base/util';
import { CalloutCanvasMappings } from '~/components/callout/Callout.mapper';

const PanelBlock = (props: RenderBlockProps<PanelBlockProps>) => {
  return (
    <CalloutStyled {...mapJson(props, CalloutCanvasMappings)}>
      <Panel block={props.block} />
    </CalloutStyled>
  );
};

export default PanelBlock;
