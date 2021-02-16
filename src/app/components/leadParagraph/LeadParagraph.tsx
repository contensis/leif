import React from 'react';

import LeadParagraphStyled from './LeadParagraph.styled';
export interface Props {
  className?: string;
  text: string;
  type?: 'default' | 'center';
}

const LeadParagraph = ({ className, type = "default", text }: Props) => {
  return (
    <LeadParagraphStyled
      className={className}
      type={type}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default LeadParagraph;
