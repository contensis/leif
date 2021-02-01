import React from 'react';
import PropTypes from 'prop-types';

import TextBlockStyled from '../components.styled/TextBlock.styled';

const TextBlock = ({ className, text, isLeadParagraph }) => {
  return (
    <TextBlockStyled
      className={className}
      isLeadParagraph={isLeadParagraph}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

TextBlock.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  isLeadParagraph: PropTypes.bool,
};

export default TextBlock;
