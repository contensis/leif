import React from 'react';

import TextBlockStyled from './TextBlock.styled';
export interface Props {
  className?: string;
  text: string;
  alignment?: string;
}

const TextBlock = ({ className, text, alignment = 'left' }: Props) => {
  if (!text) return null;
  return (
    <TextBlockStyled
      className={className}
      alignment={alignment}
      dangerouslySetInnerHTML={{
        __html: text
          .replace(
            /<table/g,
            '<div class="text-block__table" tabindex="0"><table'
          )
          .replace(/<\/table>/g, '</table></div>'),
      }}
    />
  );
};

export default TextBlock;
