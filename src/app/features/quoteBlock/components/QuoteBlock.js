import React from 'react';

import QuoteBlockStyled from '../components.styled/QuoteBlock.styled';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.quote
 */

const QuoteBlock = ({ className, quote }) => {
  return (
    <QuoteBlockStyled className={className}>
      &quot;{quote}&quot;
    </QuoteBlockStyled>
  );
};

export default QuoteBlock;
