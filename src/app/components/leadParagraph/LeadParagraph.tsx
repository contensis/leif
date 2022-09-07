import React from 'react';

import LeadParagraphStyled from './LeadParagraph.styled';
export interface Props {
  className?: string;
  text?: string;
  type?: 'default' | 'center';
}

const LeadParagraph = ({ className, type = 'default', text }: Props) => {
  if (!text) return null;
  return (
    <LeadParagraphStyled
      className={className}
      type={type}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default LeadParagraph;
