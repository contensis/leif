import React from 'react';

import TextBlockStyled from './TextBlock.styled';

/**
 * @param {object} props
 * @param {string} props.className
 * @param {string} props.text
 * @param {boolean} props.isLeadParagraph
 */

const TextBlock = ({ className, text, isLeadParagraph }) => {
  return (
    <TextBlockStyled
      className={className}
      isLeadParagraph={isLeadParagraph}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default TextBlock;
