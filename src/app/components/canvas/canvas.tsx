import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';
import Region from '~/layout/Region';

import MarkupBlock from './blocks/markup/Markup.block';
import ImageCanvasBlock from './blocks/image/Image.block';
import QuoteBlock from './blocks/quote/quote.block';
import FeaturedProductComponent from '~/components/canvas/components/featuredProduct/featuredProduct';

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
        <RenderContextProvider
          blocks={{
            _paragraph: MarkupBlock,
            _heading: MarkupBlock,
            _image: ImageCanvasBlock,
            _quote: QuoteBlock,
          }}
          components={{
            featuredProduct: FeaturedProductComponent,
          }}
        >
          <Renderer data={data} />
        </RenderContextProvider>
      </Region>
    </ContentPageContext.Provider>
  );
};

export default Canvas;
