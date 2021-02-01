import React from 'react';
import PropTypes from 'prop-types';

import QuoteBlockStyled from '../components.styled/QuoteBlock.styled';

const QuoteBlock = ({ className, quote }) => {
  return (
    <QuoteBlockStyled className={className}>
      &quot;{quote}&quot;
    </QuoteBlockStyled>
  );
};

QuoteBlock.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.string,
};

export default QuoteBlock;
