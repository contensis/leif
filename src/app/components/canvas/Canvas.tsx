import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';
import { blocks, components } from '~/components/canvas/Canvas.util';

import CanvasStyled from './Canvas.styled';

export type Props = { data: Block[]; isContentPage: boolean };

const Canvas = ({ data }: Props) => {
  if (!data) return null;

  console.info({ data });
  return (
    <CanvasStyled data-component="canvas">
      <RenderContextProvider blocks={blocks} components={components}>
        <Renderer data={data} />
      </RenderContextProvider>
    </CanvasStyled>
  );
};

export default Canvas;
