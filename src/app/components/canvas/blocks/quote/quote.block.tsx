import React from 'react';
import {
  QuoteBlock as QuoteBlockProps,
  RenderBlockProps,
} from '@contensis/canvas-react';
import { QuoteWrapperStyled, SeperatorStyled } from './Quote.styled';

const QuoteBlock = ({ block }: RenderBlockProps<QuoteBlockProps>) => {
  const { value, properties } = block;
  if (!value) return null;

  return (
    <QuoteWrapperStyled>
      <blockquote cite={properties?.url}>
        <q>{value}</q>
        <footer>
          {properties?.source && <cite>{properties?.source}</cite>}
          {properties?.source && properties?.citation && (
            <SeperatorStyled> - </SeperatorStyled>
          )}
          {properties?.citation && <span>{properties?.citation}</span>}
        </footer>
      </blockquote>
    </QuoteWrapperStyled>
  );
};

export default QuoteBlock;
