import React from 'react';

import QuoteBlockStyled from './QuoteBlock.styled';
interface Props {
  className?: string;
  quote: string;
}

const QuoteBlock: React.FC<Props> = ({ className, quote }) => {
  return (
    <QuoteBlockStyled className={className}>
      &quot;{quote}&quot;
    </QuoteBlockStyled>
  );
};

export default QuoteBlock;
