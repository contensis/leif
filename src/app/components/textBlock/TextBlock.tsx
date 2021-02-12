import React from 'react';

import TextBlockStyled from './TextBlock.styled';
interface Props {
  className?: string;
  text: string;
}

const TextBlock = ({ className, text, }: Props) => {
  return (
    <TextBlockStyled
      className={className}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default TextBlock;
