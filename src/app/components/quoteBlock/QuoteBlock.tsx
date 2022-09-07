import React from 'react';
import Author from '../author/Author';
import Rating from '../rating/Rating';

import QuoteBlockStyled from './QuoteBlock.styled';
export interface Props {
  className?: string;
  quote: string;
  rating?: string;
  photo?: string;
  name?: string;
}

const QuoteBlock = ({ className, quote, rating, photo, name }: Props) => {
  if (!quote) return null;
  return (
    <QuoteBlockStyled className={className}>
      &quot;{quote}&quot;
      <div className="quote-block__details">
        {rating && <Rating rating={rating} className="quote-block__rating" />}
        {photo && name && (
          <Author photo={photo} name={name} className="quote-block__person" />
        )}
      </div>
    </QuoteBlockStyled>
  );
};

export default QuoteBlock;
