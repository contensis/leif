import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';
import Region from '~/layout/Region';
import blocks from '~/components/canvas/canvasBlocks';
import components from '~/components/canvas/canvasComponents';

export interface Props {
  isContentPage?: boolean;
}

export const ContentPageContext = React.createContext(false);

const Canvas = ({
  data,
  isContentPage = false,
}: {
  data?: Block[];
  isContentPage?: boolean;
}) => {
  if (!data) return null;
  return (
    <ContentPageContext.Provider value={isContentPage}>
      <Region width={isContentPage ? 'msmall' : 'small'} margin="default">
        <RenderContextProvider blocks={blocks} components={components}>
          <Renderer data={data} />
        </RenderContextProvider>
      </Region>
    </ContentPageContext.Provider>
  );
};

export default Canvas;
