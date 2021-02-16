import React from 'react';

import LeadParagraphStyled from './LeadParagraph.styled';
export interface Props {
  className?: string;
  text: string;
}

const LeadParagraph = ({ className, text }: Props) => {
  return (
    <LeadParagraphStyled
      className={className}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default LeadParagraph;
