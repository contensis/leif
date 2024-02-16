import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';
import { blocks, components } from '~/components/canvas/Canvas.util';

import CanvasStyled from './Canvas.styled';
export const ContentPageContext = React.createContext(false);

export type Props = { data: Block[]; isContentPage: boolean };

const Canvas = ({ data, isContentPage = false }: Props) => {
  if (!data) return null;
  return (
    <ContentPageContext.Provider value={isContentPage}>
      <CanvasStyled data-component="canvas">
        <RenderContextProvider blocks={blocks} components={components}>
          <Renderer data={data} />
        </RenderContextProvider>
      </CanvasStyled>
    </ContentPageContext.Provider>
  );
};

export default Canvas;
