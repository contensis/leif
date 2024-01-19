import React from 'react';
import {
  Renderer,
  RenderContextProvider,
  Block,
} from '@contensis/canvas-react';
import Region from '~/layout/Region';
import { FeaturedProductComponent, Image, Quote } from '~/dynamic/components';
import MarkupBlock from './blocks/markup/Markup.block';

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
            _image: Image,
            _quote: Quote,
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
