import React from 'react';

import TextBlockStyled from './TextBlock.styled';
export interface Props {
  className?: string;
  text: string;
}

const TextBlock = ({ className, text }: Props) => {
  return (
    <TextBlockStyled
      className={className}
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
