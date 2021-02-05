import React from 'react';

import LeadParagraphStyled from './LeadParagraph.styled';
interface Props {
  className?: string;
  text: string;
}

const LeadParagraph: React.FC<Props> = ({ className, text }) => {
  return (
    <LeadParagraphStyled
      className={className}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default LeadParagraph;
