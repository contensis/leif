import React from 'react';
import {
  QuoteBlock as QuoteBlockProps,
  RenderBlockProps,
} from '@contensis/canvas-react';
import QuoteWrapperStyled from './quote.styled';

const QuoteBlock = (props: RenderBlockProps<QuoteBlockProps>) => {
  if (!props.block.value) return null;

  return (
    <QuoteWrapperStyled>
      <blockquote cite={props?.block?.properties?.url}>
        <q>{props.block.properties?.source}</q>
        <footer>
          <cite> {props.block.properties?.citation}</cite>
        </footer>
      </blockquote>
    </QuoteWrapperStyled>
  );
};

export default QuoteBlock;
