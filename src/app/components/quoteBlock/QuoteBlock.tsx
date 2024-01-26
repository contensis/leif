import React from 'react';
import Author from '../author/Author';
import Rating from '../rating/Rating';
import QuoteBlockStyled from './QuoteBlock.styled';

export interface Props {
  className?: string;
  quote: string;
  rating?: string;
  photo?: string;
  name: string;
}

const QuoteBlock = ({ className, quote, rating, photo, name }: Props) => {
  if (!quote) return null;
  return (
    <QuoteBlockStyled className={className} data-component="quote-block">
      <blockquote>
        <p>&quot;{quote}&quot;</p>
        {rating && <Rating rating={rating} className="quote-block__rating" />}
        <footer>
          <cite>{photo && <Author photo={photo} name={name} />}</cite>
        </footer>
      </blockquote>
    </QuoteBlockStyled>
  );
};

export default QuoteBlock;
