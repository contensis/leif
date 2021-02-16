import React from 'react';
import Author, { PersonObject } from '../author/Author';
import Rating from '../rating/Rating';

import QuoteBlockStyled from './QuoteBlock.styled';
export interface Props {
  className?: string;
  quote: string;
  rating?: string;
  author?: PersonObject;
}

const QuoteBlock = ({ className, quote, rating, author }: Props) => {
  return (
    <QuoteBlockStyled className={className}>
      &quot;{quote}&quot;
      <div className="quote-block__details">
        {rating && <Rating rating={rating} className="quote-block__rating" />}
        {author && <Author person={author} className="quote-block__person" />}
      </div>
    </QuoteBlockStyled>
  );
};

export default QuoteBlock;
