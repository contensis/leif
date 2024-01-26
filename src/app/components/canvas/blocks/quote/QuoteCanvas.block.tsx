import React from 'react';
import {
  RenderBlockPropsWithChildren,
  QuoteBlock as QuoteBlockProps,
  Quote as QuoteCanvas,
} from '@contensis/canvas-react';
import QuoteBlockStyled from '~/components/quoteBlock/QuoteBlock.styled';

const QuoteBlock = (props: RenderBlockPropsWithChildren<QuoteBlockProps>) => {
  return (
    <QuoteBlockStyled data-component="quote-block">
      <QuoteCanvas block={props.block} />
    </QuoteBlockStyled>
  );
};

export default QuoteBlock;
